import { default as MmToastive } from './toastive';
import { ToastiveProps } from './toastive.types';
/**
 * Show Toastive
 * @param {ToastiveProps} props - Toastive properties
 * @returns {MmToastive} - Toastive instance
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
export declare const showToastive: (props?: ToastiveProps) => MmToastive;
