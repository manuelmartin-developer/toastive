import { ToastivePosition, ToastiveProp, ToastiveProps, ToastiveVariant } from './toastive.types'
import toastiveCSS from './toastive.css?raw'
import closeIcon from './assets/close.svg?raw'
import successIcon from './assets/success.svg?raw'
import warningIcon from './assets/warning.svg?raw'
import infoIcon from './assets/info.svg?raw'
import errorIcon from './assets/error.svg?raw'
import loadingIcon from './assets/loading.svg?raw'

export default class MmToastive extends HTMLElement {
	// ------ PRIVATE PROPERTIES ------
	#timer!: NodeJS.Timeout

	// ------ PUBLIC PROPERTIES ------

	autoClose!: boolean

	closeButton!: boolean

	draggable!: boolean

	duration!: number

	icon!: boolean

	title!: string

	message!: string

	position!: string

	variant!: string

	// ------ GETTERS & SETTERS ------

	static get observedAttributes(): ToastiveProp[] {
		return Object.values(ToastiveProp)
	}

	// Slots

	get button() {
		return this.shadowRoot?.getElementById('toastive__close')
	}

	get template(): string {
		const { autoClose, closeButton, title, message, position, variant } = this

		return `
      <style>
        ${toastiveCSS}
      </style>
      <div class="toastive ${variant} ${position}">
        ${this.#getSvgIcon(variant) ? `<slot name="icon">${this.#getSvgIcon(variant)}</slot>` : ''}
        <slot ${!title ? 'hidden' : ''} name="title">${title}</slot>
        <slot ${!message ? 'hidden' : ''} name="message">${message}</slot>
        ${closeButton ? `<button id="toastive__close" class="toastive__close">${closeIcon}</button>` : ''}
        ${autoClose ? '<div class="toastive__progress"></div>' : ''}
      </div>
    `
	}

	set options(props: ToastiveProps) {
		// @ts-expect-error No index signature with a parameter of type 'string' was found on type 'ToastiveProps'.
		Object.entries(props).forEach(([prop, value]) => (this[prop] = value))

		const template = document.createElement('template')
		template.innerHTML = this.template

		this.shadowRoot?.appendChild(template.content.cloneNode(true))
	}

	// ------ CONSTRUCTOR ------

	constructor(props?: ToastiveProps) {
		super()

		this.attachShadow({ mode: 'open' })

		const {
			autoClose = true,
			closeButton = false,
			draggable = true,
			duration = 5000,
			title = '',
			message = '',
			position = ToastivePosition.BottomRight,
			variant = ToastiveVariant.Default
		} = props || {}

		this.options = {
			autoClose,
			closeButton,
			draggable,
			duration,
			title,
			message,
			position,
			variant
		}
	}

	// ------ LIFECYCLE METHODS ------

	connectedCallback(): void {
		if (this.shadowRoot?.isConnected) {
			if (this.closeButton) {
				this.button?.addEventListener('click', event => this.#addCloseAnimation(event))
			}

			if (this.autoClose) {
				this.#addAutoCloseAnimation()
			}

			if (this.draggable) {
				this.#slideToClose()
			}
		}
	}

	disconnectedCallback(): void {
		if (this.closeButton) {
			this.button?.removeEventListener('click', event => this.#addCloseAnimation(event))
		}

		if (this.autoClose) {
			if (this.#timer) clearTimeout(this.#timer)
		}
	}

	// ------ PRIVATE METHODS ------
	#addAutoCloseAnimation() {
		const progressBar = this.shadowRoot?.querySelector('.toastive__progress') as HTMLElement

		progressBar?.animate([{ width: '100%' }, { width: '0%' }], {
			duration: this.duration,
			easing: 'linear',
			fill: 'forwards'
		})

		this.#timer = setTimeout(() => {
			this.#addCloseAnimation()
		}, this.duration)
	}

	#addCloseAnimation(event?: MouseEvent): void {
		event?.stopPropagation()

		this.animate(
			[
				{ transform: 'translateY(0%)', opacity: 1 },
				{
					transform:
						this.position === ToastivePosition.TopRight || this.position === ToastivePosition.TopLeft
							? 'translateY(-100%)'
							: 'translateY(100%)',
					opacity: 0
				}
			],
			{
				duration: 300,
				easing: 'ease-in-out',
				fill: 'forwards'
			}
		).onfinish = () => {
			this.#handleClose()
		}
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

		this.remove()
	}

	#slideToClose = (): void => {
		const handleMove = (event: MouseEvent | TouchEvent) => {
			const isAtRightPosition =
				this.position === ToastivePosition.TopRight || this.position === ToastivePosition.BottomRight

			const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX

			const initialX = clientX

			const handleMouseMove = (event: MouseEvent | TouchEvent) => {
				const currentX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX

				const diffX = currentX - initialX

				if ((Math.abs(diffX) > 10 && isAtRightPosition && diffX > 0) || (!isAtRightPosition && diffX < 0)) {
					this.style.transition = 'none'
					this.style.transform = `translate(${diffX}px)`
				}
			}

			const handleMouseUp = (event: MouseEvent | TouchEvent) => {
				document.removeEventListener('mousemove', handleMouseMove)
				document.removeEventListener('mouseup', handleMouseUp)
				document.removeEventListener('touchmove', handleMouseMove)
				document.removeEventListener('touchend', handleMouseUp)

				const currentX = event instanceof MouseEvent ? event.clientX : event.changedTouches[0].clientX
				const diffX = currentX - initialX

				if ((isAtRightPosition && diffX > 50) || (!isAtRightPosition && diffX < -50)) {
					this.style.transition = 'transform 0.3s'

					if (isAtRightPosition) {
						this.style.transform = 'translateX(100%)'
					} else {
						this.style.transform = 'translateX(-100%)'
					}

					setTimeout(() => {
						this.#handleClose()
					}, 300)
				} else {
					this.style.transition = 'transform 0.3s'
					this.style.transform = 'translateX(0)'
				}
			}

			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
			document.addEventListener('touchmove', handleMouseMove)
			document.addEventListener('touchend', handleMouseUp)
		}

		this.addEventListener('mousedown', handleMove)
		this.addEventListener('touchstart', handleMove, { passive: true })
	}

	// ------ PUBLIC METHODS ------
	/**
	 * Close the toast
	 * @returns {void}
	 * @example
	 * toast.close()
	 */
	close(): void {
		this.#addCloseAnimation()
	}

	/**
	 * Update the toast
	 * @param {ToastiveProps} props - Toastive properties
	 * @returns {void}
	 * @example
	 * toast.update({
	 *  title: 'New Title',
	 * message: 'New Message',
	 * variant: ToastiveVariant.Error,
	 * autoClose: false,
	 * closeButton: true
	 * })
	 */
	update(props?: Omit<ToastiveProps, ToastiveProp.Position>): void {
		const { autoClose, closeButton, duration, title, message, variant } = props || {}

		if (duration && this.duration !== duration) {
			this.duration = duration

			if (this.autoClose) {
				this.shadowRoot?.querySelector('.toastive__progress')?.animate([{ width: '100%' }, { width: '0%' }], {
					duration: this.duration,
					easing: 'linear',
					fill: 'forwards'
				})
			}
		}

		if (message && this.message !== message) {
			const messageSlot = this.shadowRoot?.querySelector("slot[name='message']")

			messageSlot!.innerHTML = message

			this.message = message
		}

		if (title && this.title !== title) {
			const titleSlot = this.shadowRoot?.querySelector("slot[name='title']")

			titleSlot!.innerHTML = title

			this.title = title
		}

		if (autoClose && this.autoClose !== autoClose) {
			this.shadowRoot
				?.querySelector('.toastive')
				?.appendChild(document.createElement('div'))
				.classList.add('toastive__progress')

			this.#addAutoCloseAnimation()

			this.autoClose = autoClose
		}

		if (variant && this.variant !== variant) {
			this.shadowRoot?.querySelector('.toastive')?.classList.replace(this.variant, variant)

			const iconSlot = this.shadowRoot?.querySelector("slot[name='icon']")

			if (iconSlot) {
				const variantIcon = this.#getSvgIcon(variant)

				iconSlot.innerHTML = ''

				if (variantIcon) {
					iconSlot.innerHTML = variantIcon
				}
			}

			this.variant = variant
		}

		if (closeButton && this.closeButton !== closeButton) {
			const button = document.createElement('button')
			button.id = 'toastive__close'
			button.classList.add('toastive__close')
			button.innerHTML = closeIcon

			this.shadowRoot?.querySelector('.toastive')?.appendChild(button)

			button.addEventListener('click', event => this.#addCloseAnimation(event))

			this.closeButton = closeButton
		}
	}
}

customElements.define('mm-toastive', MmToastive)
