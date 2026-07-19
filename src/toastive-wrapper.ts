import toastiveWrapperCSS from './toastive-wrapper.css?raw'
import MmToastive from './toastive.js'
import { ToastivePosition } from './toastive.types.js'

// Runtime support check — duplicate of the one in toastive.ts because both
// files call `customElements.define()` at module load. Bundlers may tree-shake
// the throw entirely if they determine the condition is statically false for
// the target environment (e.g. Vite + ESBuild with `define: { ... }`).
if (typeof window === 'undefined' || !('customElements' in window)) {
  throw new Error(
    '[toastive] Custom Elements are required. ' +
      'If you are using SSR, import this module only on the client side ' +
      '(e.g. with a dynamic `import()` or inside `useEffect`).'
  )
}

// Shared parsed stylesheet for the wrapper — same approach as MmToastive.
const toastiveWrapperStylesheet = new CSSStyleSheet()
toastiveWrapperStylesheet.replaceSync(toastiveWrapperCSS)

export class MmToastiveWrapper extends HTMLElement {
  //  ------ GETTERS & SETTERS ------

  //  ------ CONSTRUCTOR ------
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    if ('adoptedStyleSheets' in ShadowRoot.prototype) {
      this.shadowRoot!.adoptedStyleSheets = [toastiveWrapperStylesheet]
    } else {
      const style = document.createElement('style')
      style.textContent = toastiveWrapperCSS
      this.shadowRoot!.appendChild(style)
    }
  }

  //  ------ LIFECYCLE METHODS ------
  connectedCallback() {
    if (this.shadowRoot?.isConnected) {
      // No template content needed — the wrapper only positions appended
      // MmToastive children. CSS handles layout via :host.
    }
  }

  //  ------ PUBLIC METHODS ------
  addToastive(toastive: MmToastive) {
    const isAtTop = [
      ToastivePosition.TopLeft,
      ToastivePosition.TopCenter,
      ToastivePosition.TopRight
    ].includes(toastive.position)

    if (isAtTop) {
      this.shadowRoot?.prepend(toastive)
    } else {
      this.shadowRoot?.append(toastive)
    }
  }
}

customElements.define('mm-toastive-wrapper', MmToastiveWrapper)
