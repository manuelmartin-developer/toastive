import MmToastive from './toastive/toastive'
import { ToastivePosition, ToastiveProps } from './toast.types'
import { MmToastiveWrapper } from './toastive-wrapper/toastive-wrapper'

const useToastive = (props?: ToastiveProps): MmToastive => {
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

export default useToastive
