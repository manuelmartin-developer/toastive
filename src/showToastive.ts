import MmToastive from './toastive'
import { ToastivePosition, ToastiveProps } from './toastive.types'
import { MmToastiveWrapper } from './toastive-wrapper'

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
export const showToastive = (props?: ToastiveProps): MmToastive => {
	let toastiveWrapper = document.querySelector(
		`mm-toastive-wrapper.${props?.position ?? ToastivePosition.BottomRight}`
	) as MmToastiveWrapper

	if (!toastiveWrapper) {
		toastiveWrapper = new MmToastiveWrapper()

		toastiveWrapper.classList.add(props?.position ?? ToastivePosition.BottomRight)

		document.body.appendChild(toastiveWrapper)
	}

	const toastive = new MmToastive(props)

	toastiveWrapper.addToastive(toastive)

	return toastive
}
