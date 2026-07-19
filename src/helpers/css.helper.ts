type StyleSheetSource = CSSStyleSheet | HTMLStyleElement | undefined

export function createStyleSheet(css: string): StyleSheetSource {
  if (typeof CSSStyleSheet !== 'undefined' && 'replaceSync' in CSSStyleSheet.prototype) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(css)
    return sheet
  }
  if (typeof document === 'undefined') {
    return undefined
  }
  const style = document.createElement('style')
  style.textContent = css
  return style
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
