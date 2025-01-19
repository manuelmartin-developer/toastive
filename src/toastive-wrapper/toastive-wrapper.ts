import MmToastive from '../toastive/toastive'
import toastiveWrapperCSS from './css/toastive-wrapper.css?raw'

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
		this.shadowRoot?.appendChild(toastive)
	}
}
customElements.define('mm-toastive-wrapper', MmToastiveWrapper)
