import {
  ToastiveAction,
  ToastivePosition,
  ToastiveProp,
  ToastiveProps,
  ToastiveTheme,
  ToastiveVariant
} from './toastive.types.js'

import toastiveCSS from './toastive.css?raw'
import closeIcon from './assets/close.svg?raw'
import successIcon from './assets/success.svg?raw'
import warningIcon from './assets/warning.svg?raw'
import infoIcon from './assets/info.svg?raw'
import errorIcon from './assets/error.svg?raw'
import loadingIcon from './assets/loading.svg?raw'
import { createStyleSheet, prefersReducedMotion } from './helpers/css.helper.js'

if (typeof window === 'undefined' || !('customElements' in window)) {
  throw new Error(
    '[toastive] Custom Elements are required. ' +
      'If you are using SSR, import this module only on the client side ' +
      '(e.g. with a dynamic `import()` or inside `useEffect`).'
  )
}

const ASSERTIVE_VARIANTS = new Set<string>([ToastiveVariant.Error, ToastiveVariant.Warning])

export default class MmToastive extends HTMLElement {
  // ------ PRIVATE PROPERTIES ------

  #animationStartTime = 0

  #closeSlideTimer?: ReturnType<typeof setTimeout>

  #dragStartTime = 0

  #dragStartX = 0

  #dragStartY = 0

  #isPaused = false

  #pointerId: number | null = null

  #swipeDirection: 'x' | 'y' | null = null

  #keydownHandler?: (event: KeyboardEvent) => void

  #pauseEnterHandler?: () => void

  #pauseLeaveHandler?: () => void

  #progressAnimation?: Animation

  #remainingDuration = 0

  #timer?: ReturnType<typeof setTimeout>

  // ------ PUBLIC PROPERTIES (state) ------

  action?: ToastiveAction

  autoClose!: boolean

  closeButton!: boolean

  draggable!: boolean

  duration!: number

  title!: string

  message!: string

  position!: ToastivePosition

  variant!: ToastiveVariant

  theme!: ToastiveTheme

  pauseOnHover!: boolean

  customIcon!: string

  // ------ GETTERS & SETTERS ------

  static get observedAttributes(): ToastiveProp[] {
    return Object.values(ToastiveProp)
  }

  get button() {
    return this.shadowRoot?.getElementById('toastive__close')
  }

  get actionButton() {
    return this.shadowRoot?.getElementById('toastive__action')
  }

  get template(): string {
    const { autoClose, closeButton, customIcon, action, title, message, position, variant } = this

    const iconDefault = customIcon || this.#getSvgIcon(variant)

    return `
      <div class="toastive ${variant} ${position}">
        ${iconDefault ? `<slot name="icon">${iconDefault}</slot>` : ''}
        <div class="toastive__content">
          <slot ${!title ? 'hidden' : ''} name="title">${title}</slot>
          <slot ${!message ? 'hidden' : ''} name="message">${message}</slot>
        </div>
        <div class="toastive__actions">
          ${action ? `<button id="toastive__action" class="toastive__action" type="button">${action.label}</button>` : ''}
          ${closeButton ? `<button id="toastive__close" class="toastive__close" type="button" aria-label="Close notification">${closeIcon}</button>` : ''}
        </div>
        ${autoClose && !prefersReducedMotion() ? '<div class="toastive__progress"></div>' : ''}
      </div>
    `
  }

  set options(props: Partial<ToastiveProps> & { action?: ToastiveAction }) {
    const settable = props as Record<string, unknown>

    for (const key of Object.keys(settable)) {
      const value = settable[key]
      if (value !== undefined) {
        ;(this as unknown as Record<string, unknown>)[key] = value
      }
    }

    this.classList.remove('light', 'dark')
    if (this.theme) this.classList.add(this.theme)

    const assertive = ASSERTIVE_VARIANTS.has(this.variant)
    this.setAttribute('role', assertive ? 'alert' : 'status')
    this.setAttribute('aria-live', assertive ? 'assertive' : 'polite')
    this.setAttribute('aria-atomic', 'true')
    if (!this.hasAttribute('tabindex')) this.tabIndex = 0

    const template = document.createElement('template')
    template.innerHTML = this.template

    this.shadowRoot?.append(template.content.cloneNode(true))
  }

  // ------ CONSTRUCTOR ------

  constructor(props?: ToastiveProps) {
    super()

    this.attachShadow({ mode: 'open' })

    const toastiveStylesheet = createStyleSheet(toastiveCSS)

    if (toastiveStylesheet instanceof CSSStyleSheet) {
      this.shadowRoot!.adoptedStyleSheets = [toastiveStylesheet]
    } else if (toastiveStylesheet instanceof HTMLStyleElement) {
      this.shadowRoot!.append(toastiveStylesheet)
    }

    const {
      action,
      autoClose = true,
      closeButton = false,
      customIcon = '',
      draggable = true,
      duration = 5000,
      message = '',
      pauseOnHover = true,
      position = ToastivePosition.BottomRight,
      theme = ToastiveTheme.Light,
      title = '',
      variant = ToastiveVariant.Default
    } = props || {}

    this.options = {
      action,
      autoClose,
      closeButton,
      draggable,
      duration,
      title,
      message,
      position,
      variant,
      theme,
      pauseOnHover,
      customIcon
    }
  }

  // ------ LIFECYCLE METHODS ------

  connectedCallback(): void {
    if (this.shadowRoot?.isConnected) {
      if (this.closeButton) {
        this.button?.addEventListener('click', (event) => this.#addCloseAnimation(event))
      }

      if (this.action) {
        const btn = this.actionButton
        if (btn) {
          btn.addEventListener('click', () => {
            try {
              this.action?.onClick()
            } finally {
              if (this.action?.closeOnClick !== false) this.close()
            }
          })
        }
      }

      if (this.autoClose) this.#addAutoCloseAnimation()
      if (this.draggable) this.#slideToClose()
      if (this.pauseOnHover) this.#setupPauseOnHover()
    }

    this.#keydownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        this.close()
      }
    }
    this.addEventListener('keydown', this.#keydownHandler)
  }

  disconnectedCallback(): void {
    this.#teardown()
  }

  // ------ PRIVATE METHODS ------

  #addAutoCloseAnimation(): void {
    const progressBar = this.shadowRoot?.querySelector('.toastive__progress') as HTMLElement | null

    this.#progressAnimation?.cancel()

    if (!prefersReducedMotion()) {
      this.#progressAnimation = progressBar?.animate([{ width: '100%' }, { width: '0%' }], {
        duration: this.duration,
        easing: 'linear',
        fill: 'forwards'
      })
    }

    this.#animationStartTime = performance.now()
    this.#remainingDuration = this.duration
    this.#isPaused = false

    this.#timer = setTimeout(() => this.#addCloseAnimation(undefined), this.duration)
  }

  #addCloseAnimation(event?: MouseEvent): void {
    event?.stopPropagation()
    this.dataset.closing = ''

    if (prefersReducedMotion()) {
      this.#handleClose()
      return
    }

    this.animate(
      [
        { transform: 'translateY(0%)', opacity: 1 },
        {
          transform: [
            ToastivePosition.TopRight,
            ToastivePosition.TopLeft,
            ToastivePosition.TopCenter
          ].includes(this.position)
            ? 'translateY(-100%)'
            : 'translateY(100%)',
          opacity: 0
        }
      ],
      { duration: 300, easing: 'ease-in-out', fill: 'forwards' }
    ).onfinish = () => this.#handleClose()
  }

  #getSvgIcon = (variant: string): string => {
    switch (variant) {
      case ToastiveVariant.Success:
        return successIcon
      case ToastiveVariant.Warning:
        return warningIcon
      case ToastiveVariant.Info:
        return infoIcon
      case ToastiveVariant.Error:
        return errorIcon
      case ToastiveVariant.Loading:
        return loadingIcon
      default:
        return ''
    }
  }

  #handleClose = (): void => {
    if (this.#timer) clearTimeout(this.#timer)

    // FLIP for exit: capture positions of sibling toasts BEFORE we remove
    // ourselves, then animate them from their old slot to the new slot (where
    // the gap is now filled). Without this, siblings snap into place the
    // moment the closing toast is removed.
    const root = this.getRootNode() as ShadowRoot | Document
    const wrapper = (root as ShadowRoot).host as HTMLElement | null
    const others: HTMLElement[] = []
    const beforePositions = new Map<HTMLElement, number>()

    if (wrapper?.shadowRoot) {
      Array.from(wrapper.shadowRoot.querySelectorAll('mm-toastive')).forEach((t) => {
        const toast = t as HTMLElement
        if (toast === this) return
        others.push(toast)
        beforePositions.set(toast, toast.getBoundingClientRect().top)
      })
    }

    this.remove()

    others.forEach((toast) => {
      const oldTop = beforePositions.get(toast)
      if (oldTop === undefined) return
      const newTop = toast.getBoundingClientRect().top
      // FLIP: invert (oldTop - newTop) so the toast starts visually at its
      // old slot, then animates to its new slot.
      const delta = oldTop - newTop
      if (Math.abs(delta) > 0.5 && !prefersReducedMotion()) {
        toast.animate([{ transform: `translateY(${delta}px)` }, { transform: 'translateY(0)' }], {
          duration: 300,
          easing: 'ease-out'
        })
      }
    })
  }

  #removePauseHoverListeners(): void {
    if (this.#pauseEnterHandler) {
      this.removeEventListener('mouseenter', this.#pauseEnterHandler)
      this.removeEventListener('focusin', this.#pauseEnterHandler)
      this.#pauseEnterHandler = undefined
    }
    if (this.#pauseLeaveHandler) {
      this.removeEventListener('mouseleave', this.#pauseLeaveHandler)
      this.removeEventListener('focusout', this.#pauseLeaveHandler)
      this.#pauseLeaveHandler = undefined
    }
  }

  #setupPauseOnHover(): void {
    const handleEnter = () => {
      if (!this.autoClose || this.#isPaused) return
      this.#isPaused = true

      const elapsed = performance.now() - this.#animationStartTime
      this.#remainingDuration = Math.max(0, this.duration - elapsed)

      if (this.#timer) clearTimeout(this.#timer)
      this.#progressAnimation?.pause()
    }

    const handleLeave = () => {
      if (!this.autoClose || !this.#isPaused) return
      this.#isPaused = false

      this.#animationStartTime = performance.now() - (this.duration - this.#remainingDuration)

      this.#progressAnimation?.play()
      this.#timer = setTimeout(() => this.#addCloseAnimation(undefined), this.#remainingDuration)
    }

    this.addEventListener('mouseenter', handleEnter)
    this.addEventListener('mouseleave', handleLeave)
    this.addEventListener('focusin', handleEnter)
    this.addEventListener('focusout', handleLeave)

    this.#pauseEnterHandler = handleEnter
    this.#pauseLeaveHandler = handleLeave
  }

  #slideToClose = (): void => {
    const SWIPE_THRESHOLD = 45
    const VELOCITY_THRESHOLD = 0.11

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button === 2) return
      if (this.dataset.closing !== undefined) return

      const target = event.target as HTMLElement | null
      if (target?.tagName === 'BUTTON') return

      if ((window.getSelection()?.toString().length ?? 0) > 0) return

      try {
        this.setPointerCapture(event.pointerId)
      } catch {
        return
      }

      this.#pointerId = event.pointerId
      this.#dragStartTime = performance.now()
      this.#dragStartX = event.clientX
      this.#dragStartY = event.clientY
      this.#swipeDirection = null
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (this.#pointerId !== event.pointerId) return

      if ((window.getSelection()?.toString().length ?? 0) > 0) {
        this.#endDrag()
        return
      }

      const xDelta = event.clientX - this.#dragStartX
      const yDelta = event.clientY - this.#dragStartY

      if (!this.#swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
        this.#swipeDirection = Math.abs(xDelta) > Math.abs(yDelta) ? 'x' : 'y'
        this.setAttribute('data-swiped', '')
      }

      if (!this.#swipeDirection) return

      const isAtTop = [
        ToastivePosition.TopRight,
        ToastivePosition.TopLeft,
        ToastivePosition.TopCenter
      ].includes(this.position)

      let translateY = 0

      if (this.#swipeDirection === 'y') {
        const dampening = (delta: number) => delta * (1 / (1.5 + Math.abs(delta) / 20))

        if (isAtTop) {
          translateY = yDelta < 0 ? yDelta : dampening(yDelta)
        } else {
          translateY = yDelta > 0 ? yDelta : dampening(yDelta)
        }
      }

      this.style.transform = `translateY(${translateY}px)`
    }

    const handlePointerUp = (event: PointerEvent) => {
      if (this.#pointerId !== event.pointerId) return

      const isAtTop = [
        ToastivePosition.TopRight,
        ToastivePosition.TopLeft,
        ToastivePosition.TopCenter
      ].includes(this.position)

      const yDelta = event.clientY - this.#dragStartY
      const timeTaken = Math.max(1, performance.now() - this.#dragStartTime)
      const velocity = Math.abs(yDelta) / timeTaken

      const startTransform = this.style.transform || 'translateY(0)'

      const shouldDismiss =
        !!this.#swipeDirection &&
        ((isAtTop && (yDelta < -SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD)) ||
          (!isAtTop && (yDelta > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD)))

      if (shouldDismiss) {
        this.dataset.closing = ''

        if (!prefersReducedMotion()) {
          this.animate(
            [
              { transform: startTransform, opacity: 1 },
              {
                transform: isAtTop ? 'translateY(-100%)' : 'translateY(100%)',
                opacity: 0
              }
            ],
            { duration: 300, easing: 'ease-in-out', fill: 'forwards' }
          ).onfinish = () => this.#handleClose()
        } else {
          this.#handleClose()
        }
      } else {
        this.#snapBack(startTransform)
      }

      this.#endDrag()
    }

    const handlePointerCancel = (event: PointerEvent) => {
      if (this.#pointerId !== event.pointerId) return
      this.#snapBack(this.style.transform || 'translateY(0)')
      this.#endDrag()
    }

    this.addEventListener('pointerdown', handlePointerDown)
    this.addEventListener('pointermove', handlePointerMove)
    this.addEventListener('pointerup', handlePointerUp)
    this.addEventListener('pointercancel', handlePointerCancel)
  }

  #snapBack(startTransform: string): void {
    if (!prefersReducedMotion()) {
      this.animate([{ transform: startTransform }, { transform: 'translateY(0)' }], {
        duration: 200,
        easing: 'ease-out'
      }).onfinish = () => {
        this.style.transform = ''
      }
    } else {
      this.style.transform = ''
    }
  }

  #endDrag = (): void => {
    if (this.#pointerId !== null) {
      try {
        this.releasePointerCapture(this.#pointerId)
      } catch {
        // pointer no longer captured (e.g. element already disconnected)
      }
      this.#pointerId = null
    }
    this.#swipeDirection = null
    this.removeAttribute('data-swiped')
  }

  #teardown(): void {
    if (this.#timer) clearTimeout(this.#timer)
    if (this.#closeSlideTimer) clearTimeout(this.#closeSlideTimer)

    this.#endDrag()
    this.#removePauseHoverListeners()

    if (this.#keydownHandler) {
      this.removeEventListener('keydown', this.#keydownHandler)
      this.#keydownHandler = undefined
    }

    this.#progressAnimation?.cancel()

    const btn = this.shadowRoot?.getElementById('toastive__close')
    btn?.replaceWith(btn.cloneNode(true))
    const actionBtn = this.shadowRoot?.getElementById('toastive__action')
    actionBtn?.replaceWith(actionBtn.cloneNode(true))
  }

  // ------ PUBLIC METHODS ------
  close(): void {
    this.#addCloseAnimation(undefined)
  }

  update(props?: Omit<ToastiveProps, ToastiveProp.Position>): void {
    if (!props) return

    const {
      autoClose,
      closeButton,
      duration,
      title,
      message,
      variant,
      theme,
      pauseOnHover,
      customIcon,
      action
    } = props

    if (title !== undefined && this.title !== title) {
      const titleSlot = this.shadowRoot?.querySelector("slot[name='title']")
      if (titleSlot) {
        titleSlot.innerHTML = title
        if (title) titleSlot.removeAttribute('hidden')
        else titleSlot.setAttribute('hidden', '')
      }
      this.title = title
    }

    if (message !== undefined && this.message !== message) {
      const messageSlot = this.shadowRoot?.querySelector("slot[name='message']")
      if (messageSlot) {
        messageSlot.innerHTML = message
        if (message) messageSlot.removeAttribute('hidden')
        else messageSlot.setAttribute('hidden', '')
      }
      this.message = message
    }

    if (variant !== undefined && this.variant !== variant) {
      this.shadowRoot?.querySelector('.toastive')?.classList.replace(this.variant, variant)
      if (!this.customIcon) {
        // `replaceChildren(string)` would render the markup as a Text node.
        // Use `innerHTML` so the SVG is parsed and rendered as real DOM.
        const iconSlot = this.shadowRoot?.querySelector("slot[name='icon']") as HTMLElement | null
        if (iconSlot) iconSlot.innerHTML = this.#getSvgIcon(variant)
      }
      this.variant = variant

      const assertive = ASSERTIVE_VARIANTS.has(this.variant)
      this.setAttribute('role', assertive ? 'alert' : 'status')
      this.setAttribute('aria-live', assertive ? 'assertive' : 'polite')
    }

    if (theme !== undefined && this.theme !== theme) {
      this.theme = theme
      this.classList.remove('light', 'dark')
      if (this.theme) this.classList.add(this.theme)
    }

    if (pauseOnHover !== undefined && this.pauseOnHover !== pauseOnHover) {
      if (!pauseOnHover) {
        this.#removePauseHoverListeners()
        if (this.#isPaused && this.autoClose) {
          this.#isPaused = false
          this.#animationStartTime = performance.now() - (this.duration - this.#remainingDuration)
          this.#progressAnimation?.play()
          this.#timer = setTimeout(
            () => this.#addCloseAnimation(undefined),
            this.#remainingDuration
          )
        }
      } else {
        this.#setupPauseOnHover()
      }
      this.pauseOnHover = pauseOnHover
    }

    if (customIcon !== undefined && this.customIcon !== customIcon) {
      this.customIcon = customIcon
      // Parse the markup rather than treating it as a Text node.
      const iconSlot = this.shadowRoot?.querySelector("slot[name='icon']") as HTMLElement | null
      if (iconSlot) iconSlot.innerHTML = customIcon
    }

    if (autoClose !== undefined && this.autoClose !== autoClose) {
      if (autoClose) {
        const progress = document.createElement('div')
        progress.classList.add('toastive__progress')
        this.shadowRoot?.querySelector('.toastive')?.appendChild(progress)
        this.#addAutoCloseAnimation()
      } else {
        if (this.#timer) clearTimeout(this.#timer)
        this.#progressAnimation?.cancel()
        this.#progressAnimation = undefined
        this.shadowRoot?.querySelector('.toastive__progress')?.remove()
      }
      this.autoClose = autoClose
    }

    if (duration !== undefined && this.duration !== duration) {
      this.duration = duration
      if (this.autoClose) this.#addAutoCloseAnimation()
    }

    if (closeButton !== undefined && this.closeButton !== closeButton) {
      if (closeButton) {
        const button = document.createElement('button')
        button.id = 'toastive__close'
        button.classList.add('toastive__close')
        button.type = 'button'
        button.setAttribute('aria-label', 'Close notification')
        button.innerHTML = closeIcon
        this.shadowRoot?.querySelector('.toastive__actions')?.append(button)
        button.addEventListener('click', (event) => this.#addCloseAnimation(event))
      } else {
        const existing = this.shadowRoot?.getElementById('toastive__close')
        existing?.replaceWith(existing.cloneNode(true))
      }
      this.closeButton = closeButton
    }

    if (action !== undefined && action !== this.action) {
      const existing = this.shadowRoot?.getElementById('toastive__action')
      existing?.replaceWith(existing.cloneNode(true))
      this.action = action
      if (action) {
        const actionBtn = document.createElement('button')
        actionBtn.id = 'toastive__action'
        actionBtn.classList.add('toastive__action')
        actionBtn.type = 'button'
        actionBtn.textContent = action.label
        this.shadowRoot?.querySelector('.toastive__actions')?.append(actionBtn)
        actionBtn.addEventListener('click', () => {
          try {
            this.action?.onClick()
          } finally {
            if (this.action?.closeOnClick !== false) this.close()
          }
        })
      }
    }
  }
}

customElements.define('mm-toastive', MmToastive)
