import type { Meta, StoryObj } from '@storybook/web-components'
import { ToastivePosition, ToastiveVariant, type ToastiveProps } from '../../src/toastive.types'
import { showToastive } from '../../src/showToastive'

// Utils
const createButtonToShowToastive = (props?: ToastiveProps, buttonText?: string) => {
	const showToast = () => showToastive({ ...props })

	const createButton = document.createElement('button')
	createButton.textContent = buttonText ?? 'Show Toastive'
	createButton.classList.add('playground')
	createButton.addEventListener('click', showToast)

	return createButton
}

const meta: Meta<ToastiveProps> = {
	argTypes: {
		autoClose: {
			control: {
				type: 'boolean'
			},
			description: 'Auto close the toast after a certain duration',
			name: 'Auto Close',
			type: {
				name: 'boolean',
				required: false
			}
		},
		closeButton: {
			control: {
				type: 'boolean'
			},
			description: 'Show a close button to dismiss the toast',
			name: 'Close Button',
			type: {
				name: 'boolean',
				required: false
			}
		},
		draggable: {
			control: {
				type: 'boolean'
			},
			description: 'Make the toast closeable by dragging',
			name: 'Draggable',
			type: {
				name: 'boolean',
				required: false
			}
		},
		duration: {
			control: {
				type: 'number'
			},
			description: 'Duration in milliseconds before the toast auto closes',
			name: 'Duration',
			type: {
				name: 'number',
				required: false
			}
		},
		message: {
			control: {
				type: 'text'
			},
			description: 'Message to display in the toast',
			name: 'Message',
			type: {
				name: 'string',
				required: false
			}
		},
		position: {
			control: {
				type: 'select'
			},
			description: 'Position of the toast on the screen',
			name: 'Position',
			options: Object.values(ToastivePosition),
			type: {
				name: 'string',
				required: false
			}
		},
		title: {
			control: {
				type: 'text'
			},
			description: 'Title to display in the toast',
			name: 'Title',
			type: {
				name: 'string',
				required: false
			}
		},
		variant: {
			control: {
				type: 'select'
			},
			description: 'Variant color of the toast',
			options: Object.values(ToastiveVariant),
			name: 'Variant',
			type: {
				name: 'string',
				required: false
			}
		}
	},
	parameters: {
		layout: 'centered'
	},
	component: 'Toastive',
	title: 'Documentation/Toastive'
}

export default meta

export const playground: StoryObj<ToastiveProps> = (args: ToastiveProps) => {
	const showToast = () => {
		showToastive({
			autoClose: args.autoClose,
			closeButton: args.closeButton,
			draggable: args.draggable,
			duration: args.duration,
			message: args.message,
			position: args.position,
			title: args.title,
			variant: args.variant
		})
	}

	const createButton = document.createElement('button')
	createButton.textContent = 'Show Toastive'
	createButton.classList.add('playground')
	createButton.addEventListener('click', showToast)

	const clearButton = document.createElement('button')
	clearButton.classList.add('playground')
	clearButton.textContent = 'Clear'
	clearButton.addEventListener('click', () => {
		document.querySelectorAll('mm-toastive-wrapper').forEach(toastive => toastive.remove())
	})

	const buttonsContainer = document.createElement('div')
	buttonsContainer.append(createButton, clearButton)

	return buttonsContainer
}

playground.argTypes = meta.argTypes

playground.args = {
	autoClose: undefined,
	closeButton: undefined,
	draggable: undefined,
	duration: undefined,
	message: "👋 Hi there, I'm a toast!!",
	position: undefined,
	title: undefined,
	variant: undefined
}

playground.parameters = {
	cssprops: {
		'toastive-wrapper-gap': {
			category: 'Wrapper',
			control: 'text',
			description: 'The gap between each toastive element',
			value: '1rem'
		},
		'toastive-wrapper-horizontal-offset': {
			category: 'Wrapper',
			control: 'text',
			description: 'The horizontal offset of the toastive wrapper',
			value: '1rem'
		},
		'toastive-wrapper-vertical-offset': {
			category: 'Wrapper',
			control: 'text',
			description: 'The vertical offset of the toastive wrapper',
			value: '1rem'
		},
		'toastive-font-family': {
			category: 'Toastive',
			subcategory: 'Font',
			control: 'text',
			description: 'The font family of the toastive element',
			value: 'inherit'
		},
		'toastive-font-size': {
			category: 'Toastive',
			subcategory: 'Font',
			control: 'text',
			description: 'The font size of the toastive element',
			value: '0.8rem'
		},
		'toastive-content-color': {
			category: 'Toastive',
			subcategory: 'Color',
			control: 'color',
			description: 'The color of the toastive element',
			value: '#333'
		},
		'toastive-background-color': {
			category: 'Toastive',
			subcategory: 'Color',
			control: 'color',
			description: 'The background color of the toastive element',
			value: '#fff'
		},
		'toastive-border-color': {
			category: 'Toastive',
			subcategory: 'Border',
			control: 'color',
			description: 'The border color of the toastive element',
			value: '#ededed'
		},
		'toastive-border-width': {
			category: 'Toastive',
			subcategory: 'Border',
			control: 'text',
			description: 'The border width of the toastive element',
			value: '1px'
		},
		'toastive-border-radius': {
			category: 'Toastive',
			subcategory: 'Border',
			control: 'text',
			description: 'The border radius of the toastive element',
			value: '0.25rem'
		},
		'toastive-width': {
			category: 'Toastive',
			subcategory: 'Layout',
			control: 'text',
			description: 'The width of the toastive element',
			value: '350px'
		},
		'toastive-padding-horizontal': {
			category: 'Toastive',
			subcategory: 'Layout',
			control: 'text',
			description: 'The horizontal padding of the toastive element',
			value: '1rem'
		},
		'toastive-padding-vertical': {
			category: 'Toastive',
			subcategory: 'Layout',
			control: 'text',
			description: 'The vertical padding of the toastive element',
			value: '1rem'
		},
		'toastive-box-shadow': {
			category: 'Toastive',
			subcategory: 'Shadow',
			control: 'text',
			description: 'The box shadow of the toastive element',
			value: '0 4px 12px rgba(0, 0, 0, 0.1)'
		},
		'toastive-info-content-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The color of the info variant',
			value: '#0973dc'
		},
		'toastive-info-background-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The background color of the info variant',
			value: '#f0f8ff'
		},
		'toastive-info-border-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The border color of the info variant',
			value: '#d3e0fd'
		},
		'toastive-success-content-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The color of the success variant',
			value: '#008a2e'
		},
		'toastive-success-background-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The background color of the success variant',
			value: '#ecfdf3'
		},
		'toastive-success-border-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The border color of the success variant',
			value: '#d3fde5'
		},
		'toastive-warning-content-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The color of the warning variant',
			value: '#dc7609'
		},
		'toastive-warning-background-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The background color of the warning variant',
			value: '#fffcf0'
		},
		'toastive-warning-border-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The border color of the warning variant',
			value: '#fdf5d3'
		},
		'toastive-error-content-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The color of the error variant',
			value: '#e60000'
		},
		'toastive-error-background-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The background color of the error variant',
			value: '#fff0f0'
		},
		'toastive-error-border-color': {
			category: 'Toastive',
			subcategory: 'Variant',
			control: 'color',
			description: 'The border color of the error variant',
			value: '#ffe0e1'
		},
		'toastive-progress-color': {
			category: 'Toastive',
			subcategory: 'Progress',
			control: 'color',
			description: 'The color of the progress bar'
		},
		'toastive-progress-height': {
			category: 'Toastive',
			subcategory: 'Progress',
			control: 'text',
			description: 'The height of the progress bar',
			value: '0.25rem'
		},
		'toastive-progress-opacity': {
			category: 'Toastive',
			subcategory: 'Progress',
			control: 'text',
			description: 'The opacity of the progress bar',
			value: '0.5'
		},
		'toastive-close-button-color': {
			category: 'Toastive',
			subcategory: 'Close Button',
			control: 'color',
			description: 'The color of the close button'
		},
		'toastive-close-button-size': {
			category: 'Toastive',
			subcategory: 'Close Button',
			control: 'text',
			description: 'The size of the close button',
			value: '1rem'
		}
	}
}

// Stories
export const propsExample: StoryObj<ToastiveProps> = () =>
	createButtonToShowToastive(
		{
			title: 'Toastive',
			message: '👋 Hi from top-right corner!',
			position: ToastivePosition.TopRight,
			variant: ToastiveVariant.Success,
			autoClose: true,
			duration: 5000,
			closeButton: false
		},
		'Show Toastive'
	)

propsExample.tags = ['auto-docs', '!dev']

export const closeButtonExample: StoryObj<ToastiveProps> = () =>
	createButtonToShowToastive(
		{
			title: 'Toastive',
			message: '👋 Hi from top-right corner!',
			position: ToastivePosition.TopRight,
			variant: ToastiveVariant.Success,
			autoClose: false,
			closeButton: true
		},
		'Show Toastive'
	)

closeButtonExample.tags = ['auto-docs', '!dev']

export const updatedPropsExample: StoryObj<ToastiveProps> = () => {
	const showToast = () => {
		const toastive = showToastive({
			title: 'Toastive',
			message: '👋 Hi from top-right corner!',
			position: ToastivePosition.TopRight,
			variant: ToastiveVariant.Loading,
			autoClose: false,
			closeButton: false
		})

		setTimeout(() => {
			toastive.update({
				title: 'Updated Toastive',
				message: '👋 Hi! This is an updated messade',
				variant: ToastiveVariant.Success,
				autoClose: true
			})
		}, 3000)
	}

	const createButton = document.createElement('button')
	createButton.textContent = 'Show Toastive'
	createButton.classList.add('playground')
	createButton.addEventListener('click', showToast)

	return createButton
}

updatedPropsExample.tags = ['auto-docs', '!dev']
