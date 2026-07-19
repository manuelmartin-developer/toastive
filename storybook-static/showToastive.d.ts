import { ToastiveDefaults, ToastivePosition, ToastiveProps, ToastiveInstance } from './toastive.types.js';
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
export declare const setDefaults: (props: ToastiveDefaults) => void;
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
export declare const resetDefaults: () => void;
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
export declare const clearToasts: (position?: ToastivePosition) => void;
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
export declare const showToastive: (props?: ToastiveProps) => ToastiveInstance;
