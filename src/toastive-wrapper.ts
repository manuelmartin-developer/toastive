import toastiveWrapperCSS from './toastive-wrapper.css?raw'
import MmToastive from './toastive.ts'
import { ToastivePosition } from './toastive.types.ts'

export class MmToastiveWrapper extends HTMLElement {
	//  ------ GETTERS & SETTERS ------
	get template() {
		return `
        <style>
        ${toastiveWrapperCSS}
        </style>
    `
	}

	//  ------ CONSTRUCTOR ------
	constructor() {
		super()

		this.attachShadow({ mode: 'open' })
	}

	//  ------ LIFECYCLE METHODS ------
	connectedCallback() {
		if (this.shadowRoot?.isConnected) {
			this.#render()

			const observer = new MutationObserver((mutations: MutationRecord[]) => {
				mutations.forEach(() => {
					if (!this.shadowRoot?.childNodes.length) {
						this.remove()
						return
					}

					const nodesHeight = Array.from(this.shadowRoot?.childNodes).reduce(
						(acc, node) => acc + (node as HTMLElement).offsetHeight,
						0
					)

					console.log('nodesHeight', nodesHeight)

					// Add the gap between toastives from --gap CSS variable. Gap can be set in px, rem, em, etc. We need the gap in px.
					let gap = window.getComputedStyle(this).getPropertyValue('--gap')

					const gapUnit = gap.match(/[a-z]+/g)?.[0]
					const gapValue = gap.match(/\d+/g)?.[0]

					// If gap is in rem or em, we need to convert it to px
					if (gapUnit === 'rem') {
						gap = (Number(gapValue) * 16).toString()
					} else if (gapUnit === 'em') {
						gap = (Number(gapValue) * 16).toString()
					}

					console.log('gap', gap)

					// Add the gap between toastives, we must add the gap multiplied by the number of toastives minus 1
					// because the gap is between the toastives, not at the end
					console.log('maxHeight', nodesHeight + Number(gap) * (this.shadowRoot?.childNodes.length - 1))
					this.style.maxHeight = `${nodesHeight + Number(gap) * (this.shadowRoot?.childNodes.length - 1)}px`
				})
			})

			observer.observe(this.shadowRoot, { childList: true })
		}
	}

	//  ------ PRIVATE METHODS ------
	#render() {
		const template = document.createElement('template')

		template.innerHTML = this.template

		this.appendChild(template.content.cloneNode(true))
	}

	//  ------ PUBLIC METHODS ------
	addToastive(toastive: MmToastive) {
		const isAtTop = toastive.position === ToastivePosition.TopLeft || toastive.position === ToastivePosition.TopRight
		// If position is on the top, add the toastive to the top. Otherwise, add it to the bottom
		if (isAtTop) {
			this.shadowRoot?.prepend(toastive)
		} else {
			this.shadowRoot?.appendChild(toastive)
		}
	}
}
customElements.define('mm-toastive-wrapper', MmToastiveWrapper)
