// @vitest-environment jsdom
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest'

// jsdom doesn't ship Web Animations API. Stub `Element.animate()` so the
// component's `connectedCallback()` can run without crashing in tests.
if (typeof Element !== 'undefined' && !Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = function () {}
  Element.prototype.releasePointerCapture = function () {}
  Element.prototype.hasPointerCapture = function () {
    return false
  }
}

if (typeof Element !== 'undefined' && !Element.prototype.animate) {
  Element.prototype.animate = function () {
    return {
      cancel: () => {},
      pause: () => {},
      play: () => {},
      finish: () => {},
      addEventListener: () => {},
      removeEventListener: () => {}
    } as unknown as Animation
  }
}

import MmToastive from '../src/toastive'
import { ToastivePosition, ToastiveVariant, type ToastiveInstance } from '../src/toastive.types'

const getIconSlot = (toast: ToastiveInstance): HTMLElement | null =>
  toast.shadowRoot?.querySelector("slot[name='icon']") as HTMLElement | null

const hasSvgElement = (slot: HTMLElement | null): boolean => slot?.querySelector('svg') !== null

const hasIconMarkupAsText = (slot: HTMLElement | null): boolean =>
  Array.from(slot?.childNodes ?? []).some(
    (n) => n.nodeType === 3 && (n.textContent ?? '').includes('<svg')
  )

const makeToast = (props: Record<string, unknown>): ToastiveInstance => {
  const t = new MmToastive(props as never) as unknown as ToastiveInstance
  document.body.appendChild(t as unknown as HTMLElement)
  return t
}

const cleanup = (): void => {
  document.querySelectorAll('mm-toastive').forEach((el) => el.remove())
  document.querySelectorAll('mm-toastive-wrapper').forEach((el) => el.remove())
}

describe('MmToastive — icon slot rendering', () => {
  beforeAll(() => {
    // Force-define the custom element if not yet registered (it is on import).
  })

  afterEach(cleanup)
  afterAll(cleanup)

  it('renders an <svg> in the icon slot on initial render', () => {
    const toast = makeToast({
      title: 'Test',
      message: 'Test message',
      variant: ToastiveVariant.Success,
      position: ToastivePosition.BottomRight
    })

    const slot = getIconSlot(toast)
    expect(slot).toBeTruthy()
    if (!slot) return
    expect(hasSvgElement(slot)).toBe(true)
    expect(hasIconMarkupAsText(slot)).toBe(false)
  })

  it('replaces the icon with a real <svg> when update() changes the variant', () => {
    const toast = makeToast({
      title: 'Uploading',
      message: 'Please wait',
      variant: ToastiveVariant.Loading,
      position: ToastivePosition.TopRight,
      autoClose: false
    })

    toast.update({
      variant: ToastiveVariant.Success,
      title: 'Done',
      message: 'Complete',
      autoClose: true
    })

    const slot = getIconSlot(toast)
    expect(slot).toBeTruthy()
    if (!slot) return
    // Regression: `replaceChildren(svgString)` rendered the markup as a Text node.
    // The fix uses `innerHTML =` so the SVG is parsed as DOM.
    expect(hasSvgElement(slot)).toBe(true)
    expect(hasIconMarkupAsText(slot)).toBe(false)
  })

  it('parses customIcon as DOM on update() (not as a text node)', () => {
    const toast = makeToast({
      title: 'Custom',
      message: 'Test',
      variant: ToastiveVariant.Info, // Info has a default icon so the slot is rendered
      position: ToastivePosition.TopRight
    })

    const svgString =
      '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>'

    toast.update({ customIcon: svgString })

    const slot = getIconSlot(toast)
    expect(slot).toBeTruthy()
    if (!slot) return
    expect(hasSvgElement(slot)).toBe(true)
    expect(hasIconMarkupAsText(slot)).toBe(false)
  })
})

const pointerDown = (target: EventTarget): void => {
  target.dispatchEvent(
    new PointerEvent('pointerdown', {
      bubbles: true,
      button: 0,
      clientX: 10,
      clientY: 10,
      composed: true,
      pointerId: 1
    })
  )
}

describe('MmToastive — close button', () => {
  afterEach(cleanup)
  afterAll(cleanup)

  it('closes when the close button is clicked', () => {
    const toast = makeToast({
      title: 'Closable',
      message: 'Click X',
      closeButton: true,
      autoClose: false,
      position: ToastivePosition.BottomRight
    })

    const button = toast.shadowRoot?.querySelector('#toastive__close') as HTMLButtonElement | null
    expect(button).toBeTruthy()
    button?.click()

    expect((toast as unknown as HTMLElement).dataset.closing).toBe('')
  })

  it('does not capture the pointer when the press starts on the close icon', () => {
    const host = makeToast({
      title: 'Closable',
      message: 'Click X',
      closeButton: true,
      draggable: true,
      autoClose: false,
      position: ToastivePosition.BottomRight
    }) as unknown as HTMLElement

    const capture = vi.spyOn(host, 'setPointerCapture').mockImplementation(() => {})
    const icon = host.shadowRoot?.querySelector('#toastive__close svg')
    expect(icon).toBeTruthy()
    if (!icon) return

    pointerDown(icon)

    expect(capture).not.toHaveBeenCalled()
  })

  it('still starts a drag when the press starts on the toast body', () => {
    const host = makeToast({
      title: 'Draggable',
      message: 'Swipe me',
      closeButton: true,
      draggable: true,
      autoClose: false,
      position: ToastivePosition.BottomRight
    }) as unknown as HTMLElement

    const capture = vi.spyOn(host, 'setPointerCapture').mockImplementation(() => {})

    pointerDown(host)

    expect(capture).toHaveBeenCalledWith(1)
  })
})
