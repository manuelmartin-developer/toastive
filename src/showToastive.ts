import MmToastive from './toastive.js'
import {
  ToastiveDefaults,
  ToastivePosition,
  ToastiveProps,
  ToastiveInstance
} from './toastive.types.js'
import { MmToastiveWrapper } from './toastive-wrapper.js'
import { prefersReducedMotion } from './helpers/css.helper.js'

// Module-level defaults. Mutated via `setDefaults()`.
// `maxVisible` is global (applies per position); other fields merge per call.
let defaults: ToastiveDefaults = {}

/**
 * Set default options that apply to every subsequent `showToastive()` call.
 * Useful for setting a global position, duration, or variant once at app
 * startup instead of repeating them on every call.
 *
 * Pass only the fields you want to set; existing defaults are merged.
 *
 * @param {ToastiveDefaults} props - Defaults to apply
 * @returns {void}
 * @example
 * setDefaults({ position: ToastivePosition.TopRight, duration: 3000, maxVisible: 5 })
 */
export const setDefaults = (props: ToastiveDefaults): void => {
  defaults = { ...defaults, ...props }
}

/**
 * Reset every default back to the package built-ins. Use it to clean up
 * after `setDefaults()` — useful in tests or in long-lived apps that
 * change defaults at runtime.
 *
 * @returns {void}
 * @example
 * setDefaults({ position: ToastivePosition.TopRight })
 * // ...
 * resetDefaults() // back to built-in defaults (all per-call props)
 */
export const resetDefaults = (): void => {
  defaults = {}
}

/**
 * Remove every active toast. If a position is given, only the wrapper at that
 * position is removed; otherwise every wrapper is removed.
 *
 * @param {ToastivePosition} [position] - Optional position to scope the clear to
 * @returns {void}
 * @example
 * clearToasts()                       // remove everything
 * clearToasts(ToastivePosition.TopRight)  // remove only top-right toasts
 */
export const clearToasts = (position?: ToastivePosition): void => {
  const selector = position ? `mm-toastive-wrapper.${position}` : 'mm-toastive-wrapper'

  document.querySelectorAll(selector).forEach((wrapper) => wrapper.remove())
}

/**
 * Show Toastive.
 *
 * @param {ToastiveProps} props - Toastive properties
 * @returns {ToastiveInstance} - Toastive instance
 * @example
 * showToastive({
 *  title: 'Title',
 * message: 'Message',
 * variant: ToastiveVariant.Success,
 * position: ToastivePosition.BottomRight,
 * autoClose: true,
 * duration: 5000,
 * closeButton: false
 * })
 *
 */
export const showToastive = (props?: ToastiveProps): ToastiveInstance => {
  const { maxVisible, ...rest } = defaults
  const merged: ToastiveProps = { ...rest, ...props }
  const position = merged.position ?? ToastivePosition.BottomRight

  let toastiveWrapper = document.querySelector(
    `mm-toastive-wrapper.${position}`
  ) as MmToastiveWrapper | null

  const beforePositions = new Map<HTMLElement, number>()
  if (toastiveWrapper?.shadowRoot) {
    Array.from(
      toastiveWrapper.shadowRoot.querySelectorAll('mm-toastive:not([data-closing])')
    ).forEach((t) => {
      beforePositions.set(t as HTMLElement, (t as HTMLElement).getBoundingClientRect().top)
    })
  }

  if (!toastiveWrapper) {
    toastiveWrapper = new MmToastiveWrapper()

    toastiveWrapper.classList.add(position)

    document.body.append(toastiveWrapper)
  }

  if (typeof maxVisible === 'number' && maxVisible > 0) {
    const existing = toastiveWrapper.shadowRoot?.querySelectorAll(
      'mm-toastive:not([data-closing])'
    ) as unknown as MmToastive[] | undefined

    if (existing && existing.length >= maxVisible) {
      const overflow = existing.length - maxVisible + 1
      for (let i = 0; i < overflow; i++) {
        existing[i].close()
      }
    }
  }

  const toastive = new MmToastive(merged) as unknown as ToastiveInstance

  toastiveWrapper.addToastive(toastive as unknown as MmToastive)

  if (toastiveWrapper.shadowRoot && beforePositions.size > 0) {
    Array.from(
      toastiveWrapper.shadowRoot.querySelectorAll('mm-toastive:not([data-closing])')
    ).forEach((t) => {
      const toast = t as HTMLElement
      const oldTop = beforePositions.get(toast)
      if (oldTop === undefined) return

      const newTop = toast.getBoundingClientRect().top
      const delta = oldTop - newTop

      if (Math.abs(delta) > 0.5 && !prefersReducedMotion()) {
        toast.animate([{ transform: `translateY(${delta}px)` }, { transform: 'translateY(0)' }], {
          duration: 300,
          easing: 'ease-out'
        })
      }
    })
  }

  return toastive
}
