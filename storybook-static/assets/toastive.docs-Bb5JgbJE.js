import{i as e}from"./preload-helper-BdFrVu1K.js";import{F as t,I as n,c as r,i,l as a,r as o,u as s}from"./blocks-DJxYZTLy.js";import{t as c}from"./mdx-react-shim-DEaU8thp.js";import{actionButton as l,clearingToasts as u,customIcon as d,globalDefaults as f,maxVisible as p,n as m,pauseOnHover as h,positions as g,quickStart as _,t as v,themes as y,updateInPlace as b,variants as x}from"./toastive.stories-CfBnwtT5.js";function S(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r,{of:m}),`
`,(0,w.jsx)(n.h1,{id:`toastive`,children:`Toastive`}),`
`,(0,w.jsxs)(n.p,{children:[`A lightweight, accessible, fully customizable web component library for toast notifications — drop-in for `,(0,w.jsx)(n.strong,{children:`any`}),` frontend stack.`]}),`
`,(0,w.jsxs)(n.ul,{children:[`
`,(0,w.jsx)(n.li,{children:`🪶 Lightweight: ~6 KB gzipped, zero dependencies.`}),`
`,(0,w.jsx)(n.li,{children:`♿ Accessible: ARIA roles, keyboard support, focus management, prefers-reduced-motion.`}),`
`,(0,w.jsx)(n.li,{children:`🎨 Customizable: 30+ CSS variables to style every detail.`}),`
`,(0,w.jsxs)(n.li,{children:[`🚀 Easy to use: one function call — `,(0,w.jsx)(n.code,{children:`showToastive(props)`}),`.`]}),`
`,(0,w.jsx)(n.li,{children:`📦 Zero dependencies: ESM-only, no runtime deps.`}),`
`,(0,w.jsx)(n.li,{children:`🌐 Framework-agnostic: vanilla web component, works with React, Vue, Svelte, Angular.`}),`
`,(0,w.jsxs)(n.li,{children:[`⏸ `,(0,w.jsx)(n.code,{children:`pauseOnHover`}),`: timer pauses on hover/focus.`]}),`
`,(0,w.jsx)(n.li,{children:`🖐 Drag to dismiss: vertical drag toward the toast's corner.`}),`
`,(0,w.jsx)(n.li,{children:`🌈 Themes: 6 variants + light/dark color themes.`}),`
`]}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-installation`,children:`📦 Installation`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-bash`,children:`npm install toastive
# or
pnpm add toastive
# or
yarn add toastive
`})}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-quick-start`,children:`🚀 Quick start`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`import { showToastive, ToastivePosition, ToastiveVariant } from 'toastive'

showToastive({
  title: 'Saved',
  message: 'Your changes have been stored.',
  variant: ToastiveVariant.Success,
  position: ToastivePosition.TopRight
})
`})}),`
`,(0,w.jsx)(n.p,{children:`That's it — the toast appears, auto-closes after 5 s, and is fully accessible.`}),`
`,(0,w.jsx)(a,{of:_}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-variants`,children:`🧬 Variants`}),`
`,(0,w.jsx)(n.p,{children:`Six built-in variants. Each one picks its own ARIA role:`}),`
`,(0,w.jsxs)(`table`,{className:`doc-table`,children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{children:`Variant`}),(0,w.jsx)(`th`,{children:`Role`}),(0,w.jsx)(`th`,{children:`aria-live`}),(0,w.jsx)(`th`,{children:`When to use`})]})}),(0,w.jsxs)(`tbody`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`default`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`status`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`polite`})}),(0,w.jsx)(`td`,{children:`Generic messages`})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`success`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`status`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`polite`})}),(0,w.jsx)(`td`,{children:`Successful actions`})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`info`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`status`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`polite`})}),(0,w.jsx)(`td`,{children:`Tips, neutral info`})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`loading`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`status`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`polite`})}),(0,w.jsx)(`td`,{children:`Async work in progress`})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`warning`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`alert`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`assertive`})}),(0,w.jsx)(`td`,{children:`Warnings, recoverable errors`})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`error`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`alert`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`assertive`})}),(0,w.jsx)(`td`,{children:`Failures, must-read errors`})]})]})]}),`
`,(0,w.jsxs)(n.p,{children:[`Error & warning use `,(0,w.jsx)(n.code,{children:`alert`}),` so screen readers announce them immediately.`]}),`
`,(0,w.jsx)(a,{of:x}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-positions`,children:`📍 Positions`}),`
`,(0,w.jsx)(n.p,{children:`Six positions — toasts in different positions stack independently.`}),`
`,(0,w.jsx)(a,{of:g}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-theming`,children:`🌓 Theming`}),`
`,(0,w.jsxs)(n.p,{children:[`Each toast accepts `,(0,w.jsx)(n.code,{children:`theme: ToastiveTheme.Light | ToastiveTheme.Dark`}),`. The theme is `,(0,w.jsx)(n.strong,{children:`per toast`}),` (it does not auto-detect from the OS), so you stay in full control. A global default can be set with `,(0,w.jsx)(n.code,{children:`setDefaults({ theme: ToastiveTheme.Dark })`}),`.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`import { showToastive, ToastiveTheme } from 'toastive'

showToastive({
  message: 'Looks good in dark mode too',
  theme: ToastiveTheme.Dark
})
`})}),`
`,(0,w.jsx)(a,{of:y}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-behaviors`,children:`⏱ Behaviors`}),`
`,(0,w.jsx)(n.h3,{id:`auto-close--pause-on-hover`,children:`Auto-close & pause on hover`}),`
`,(0,w.jsxs)(n.p,{children:[`By default the toast auto-closes after `,(0,w.jsx)(n.code,{children:`duration`}),` (5 s). Hover or focus the toast to `,(0,w.jsx)(n.strong,{children:`pause`}),` both the timer and the progress bar; move away to resume.`]}),`
`,(0,w.jsx)(a,{of:h}),`
`,(0,w.jsx)(n.p,{children:`Disable per toast:`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`showToastive({
  message: 'Strict timer',
  pauseOnHover: false
})
`})}),`
`,(0,w.jsx)(n.h3,{id:`prefers-reduced-motion`,children:(0,w.jsx)(n.code,{children:`prefers-reduced-motion`})}),`
`,(0,w.jsx)(n.p,{children:`If the user has reduced-motion enabled at the OS level, all slide/close animations are skipped. The toast appears and disappears instantly, the progress bar is hidden, and the drag-to-dismiss snap-back is removed. No opt-in required.`}),`
`,(0,w.jsx)(n.h3,{id:`drag-to-dismiss`,children:`Drag to dismiss`}),`
`,(0,w.jsxs)(n.p,{children:[`Every toast is draggable by default. Drag vertically toward the toast's corner — `,(0,w.jsx)(n.strong,{children:`up`}),` for top-positioned toasts, `,(0,w.jsx)(n.strong,{children:`down`}),` for bottom-positioned ones — past a 50 px threshold to dismiss. Reverse direction is ignored so the toast never opens the wrong way.`]}),`
`,(0,w.jsxs)(n.p,{children:[`Disable per toast with `,(0,w.jsx)(n.code,{children:`draggable: false`}),`.`]}),`
`,(0,w.jsxs)(n.h3,{id:`cap-per-corner-maxvisible`,children:[`Cap per corner (`,(0,w.jsx)(n.code,{children:`maxVisible`}),`)`]}),`
`,(0,w.jsxs)(n.p,{children:[`Limit active toasts per position. When the cap is reached, the `,(0,w.jsx)(n.strong,{children:`oldest`}),` toast is closed (FIFO) before the new one is added.`]}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(n.p,{children:`Globally:`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`import { setDefaults } from 'toastive'

setDefaults({ maxVisible: 5 }) // each corner holds at most 5 toasts
`})}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-patterns--recipes`,children:`🧱 Patterns & recipes`}),`
`,(0,w.jsx)(n.p,{children:`Common end-to-end patterns with ready-to-copy snippets.`}),`
`,(0,w.jsx)(n.h3,{id:`action-button--undo-retry-view`,children:`Action button — Undo, Retry, View`}),`
`,(0,w.jsxs)(n.p,{children:[`Add a secondary button (typically "Undo", "Retry", "View"). By default, clicking it closes the toast. Pass `,(0,w.jsx)(n.code,{children:`closeOnClick: false`}),` to keep it open.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`showToastive({
  message: 'File deleted',
  variant: ToastiveVariant.Default,
  autoClose: false,
  closeButton: true,
  action: {
    label: 'Undo',
    onClick: () => restoreFile(),
    closeOnClick: true // default
  }
})
`})}),`
`,(0,w.jsx)(a,{of:l}),`
`,(0,w.jsx)(n.h3,{id:`update-a-live-toast--loading--success`,children:`Update a live toast — loading → success`}),`
`,(0,w.jsxs)(n.p,{children:[(0,w.jsx)(n.code,{children:`showToastive()`}),` returns an instance with `,(0,w.jsx)(n.code,{children:`update()`}),` and `,(0,w.jsx)(n.code,{children:`close()`}),`. The DOM diffs in place — no re-creation, no animation restart (except `,(0,w.jsx)(n.code,{children:`duration`}),`, which restarts the progress bar).`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`const toast = showToastive({
  title: 'Uploading',
  message: 'Please wait...',
  variant: ToastiveVariant.Loading,
  autoClose: false
})

await upload()

toast.update({
  title: 'Done',
  message: 'Upload complete.',
  variant: ToastiveVariant.Success,
  autoClose: true
})
`})}),`
`,(0,w.jsx)(a,{of:b}),`
`,(0,w.jsx)(n.h3,{id:`global-defaults`,children:`Global defaults`}),`
`,(0,w.jsxs)(n.p,{children:[`Use `,(0,w.jsx)(n.code,{children:`setDefaults()`}),` to apply options to every subsequent `,(0,w.jsx)(n.code,{children:`showToastive()`}),` call. Defaults are `,(0,w.jsx)(n.strong,{children:`merged`}),`, not replaced — pass only the fields you want to change.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`import { setDefaults, ToastivePosition, ToastiveTheme } from 'toastive'

setDefaults({
  position: ToastivePosition.TopRight,
  duration: 3000,
  theme: ToastiveTheme.Dark
})
`})}),`
`,(0,w.jsx)(a,{of:f}),`
`,(0,w.jsx)(n.h3,{id:`clearing-toasts`,children:`Clearing toasts`}),`
`,(0,w.jsxs)(n.p,{children:[`Use `,(0,w.jsx)(n.code,{children:`clearToasts()`}),` to remove active toasts. Pass a position to scope the clear; omit to remove everything.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`import { clearToasts, ToastivePosition } from 'toastive'

clearToasts() // remove every toast
clearToasts(ToastivePosition.TopRight) // only top-right corner
`})}),`
`,(0,w.jsx)(a,{of:u}),`
`,(0,w.jsx)(n.h3,{id:`custom-icons`,children:`Custom icons`}),`
`,(0,w.jsxs)(n.p,{children:[`Pass an HTML string via `,(0,w.jsx)(n.code,{children:`customIcon`}),` to override the default per-variant icon.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`showToastive({
  message: 'Custom icon',
  customIcon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>'
})
`})}),`
`,(0,w.jsx)(a,{of:d}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-accessibility`,children:`♿ Accessibility`}),`
`,(0,w.jsx)(n.p,{children:`Toastive is accessible by default — no configuration required:`}),`
`,(0,w.jsxs)(n.ul,{children:[`
`,(0,w.jsxs)(n.li,{children:[(0,w.jsxs)(n.strong,{children:[(0,w.jsx)(n.code,{children:`role`}),` & `,(0,w.jsx)(n.code,{children:`aria-live`})]}),` are set on the host element based on variant (`,(0,w.jsx)(n.code,{children:`polite`}),` for info/success/loading, `,(0,w.jsx)(n.code,{children:`assertive`}),` for error/warning).`]}),`
`,(0,w.jsxs)(n.li,{children:[(0,w.jsx)(n.strong,{children:(0,w.jsx)(n.code,{children:`aria-atomic="true"`})}),` — screen readers re-announce the whole toast on each update.`]}),`
`,(0,w.jsxs)(n.li,{children:[(0,w.jsx)(n.strong,{children:`Close button`}),` has `,(0,w.jsx)(n.code,{children:`aria-label="Close notification"`}),`.`]}),`
`,(0,w.jsxs)(n.li,{children:[(0,w.jsx)(n.strong,{children:`Keyboard support`}),` — every toast is `,(0,w.jsx)(n.code,{children:`tabindex="0"`}),`. Tab to it, press `,(0,w.jsx)(`kbd`,{children:`Esc`}),` to close.`]}),`
`,(0,w.jsxs)(n.li,{children:[(0,w.jsx)(n.strong,{children:(0,w.jsx)(n.code,{children:`prefers-reduced-motion`})}),` — slide/close animations are skipped, drag snap-back removed, progress bar hidden.`]}),`
`,(0,w.jsxs)(n.li,{children:[(0,w.jsx)(n.strong,{children:`Visible focus ring`}),` on the toast when reached with the keyboard.`]}),`
`]}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-framework-integrations`,children:`🌍 Framework integrations`}),`
`,(0,w.jsxs)(n.p,{children:[`Toastive is a Custom Element (`,(0,w.jsx)(n.code,{children:`<mm-toastive>`}),`) plus a one-call API. Because it ships as a Web Component, it works anywhere Custom Elements are supported. The only rule: `,(0,w.jsxs)(n.strong,{children:[`import `,(0,w.jsx)(n.code,{children:`toastive`}),` on the client side only`]}),` — it throws on SSR.`]}),`
`,(0,w.jsx)(n.h3,{id:`vanilla-js--typescript`,children:`Vanilla JS / TypeScript`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-typescript`,children:`import { showToastive } from 'toastive'

document.querySelector('#save')?.addEventListener('click', () => {
  showToastive({ message: 'Saved!', variant: 'success' })
})
`})}),`
`,(0,w.jsx)(n.h3,{id:`react-19`,children:`React 19+`}),`
`,(0,w.jsxs)(n.p,{children:[`React 19 ships Custom Element support out of the box. The `,(0,w.jsx)(n.code,{children:`showToastive`}),` API uses no JSX, so there is nothing to wire up — just call it from a handler.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-tsx`,children:`import { showToastive, ToastiveVariant } from 'toastive'

export function SaveButton() {
  return (
    <button
      onClick={() =>
        showToastive({
          message: 'Saved!',
          variant: ToastiveVariant.Success
        })
      }
    >
      Save
    </button>
  )
}
`})}),`
`,(0,w.jsxs)(n.blockquote,{children:[`
`,(0,w.jsxs)(n.p,{children:[`💡 If you also render the element directly via `,(0,w.jsx)(n.code,{children:`<mm-toastive>`}),` in JSX, listen to its custom events with `,(0,w.jsx)(n.code,{children:`addEventListener`}),` inside `,(0,w.jsx)(n.code,{children:`useEffect`}),` — JSX-style props like `,(0,w.jsx)(n.code,{children:`onToastiveClose`}),` won't fire.`]}),`
`]}),`
`,(0,w.jsx)(n.h3,{id:`vue-3`,children:`Vue 3`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-vue`,children:`<script setup lang="ts">
import { showToastive, ToastiveVariant } from 'toastive'

function onSave() {
  showToastive({ message: 'Saved!', variant: ToastiveVariant.Success })
}
<\/script>

<template>
  <button @click="onSave">Save</button>
</template>
`})}),`
`,(0,w.jsx)(n.h3,{id:`angular-16-standalone-components`,children:`Angular 16+ (standalone components)`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-typescript`,children:`import { Component } from '@angular/core'
import { showToastive, ToastiveVariant } from 'toastive'

@Component({
  selector: 'app-save',
  standalone: true,
  template: \`<button (click)="onSave()">Save</button>\`
})
export class SaveComponent {
  onSave() {
    showToastive({ message: 'Saved!', variant: ToastiveVariant.Success })
  }
}
`})}),`
`,(0,w.jsx)(n.h3,{id:`svelte-5`,children:`Svelte 5`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-svelte`,children:`<script lang="ts">
  import { showToastive, ToastiveVariant } from 'toastive'

  function onSave() {
    showToastive({ message: 'Saved!', variant: ToastiveVariant.Success })
  }
<\/script>

<button onclick={onSave}>Save</button>
`})}),`
`,(0,w.jsxs)(n.blockquote,{children:[`
`,(0,w.jsxs)(n.p,{children:[`💡 Don't forget to add `,(0,w.jsx)(n.code,{children:`toastive`}),` to your bundler's `,(0,w.jsx)(n.code,{children:`ssr.noExternal`}),` / `,(0,w.jsx)(n.code,{children:`external`}),` config so the import is replaced by the client runtime on the server pass.`]}),`
`]}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-customization`,children:`🎨 Customization`}),`
`,(0,w.jsxs)(n.p,{children:[`Every visual property is a CSS custom property. Override them on `,(0,w.jsx)(n.code,{children:`:root`}),` or any ancestor — values cascade into each toast's open Shadow DOM.`]}),`
`,(0,w.jsx)(n.h3,{id:`color-palette`,children:`Color palette`}),`
`,(0,w.jsxs)(i,{children:[(0,w.jsx)(o,{name:`Default & Loading`,subtitle:`Default / Loading color palette`,colors:{Background:`#fff`,Border:`#ededed`,Content:`#333`}}),(0,w.jsx)(o,{name:`Info`,subtitle:`Info color palette`,colors:{Background:`#f0f8ff`,Border:`#d3e0fd`,Content:`#0973dc`}}),(0,w.jsx)(o,{name:`Success`,subtitle:`Success color palette`,colors:{Background:`#ecfdf3`,Border:`#d3fde5`,Content:`#008a2e`}}),(0,w.jsx)(o,{name:`Warning`,subtitle:`Warning color palette`,colors:{Background:`#fffcf0`,Border:`#fdf5d3`,Content:`#dc7609`}}),(0,w.jsx)(o,{name:`Error`,subtitle:`Error color palette`,colors:{Background:`#fff0f0`,Border:`#ffe0e1`,Content:`#e60000`}})]}),`
`,(0,w.jsxs)(n.p,{children:[`The dark theme overrides are baked into the component when `,(0,w.jsx)(n.code,{children:`theme="dark"`}),` is set — they light up `,(0,w.jsx)(n.code,{children:`#eaeaea`}),` content on `,(0,w.jsx)(n.code,{children:`#1a1a1a`}),` background with per-variant accents.`]}),`
`,(0,w.jsx)(n.h3,{id:`css-variables`,children:`CSS variables`}),`
`,(0,w.jsx)(n.p,{children:(0,w.jsx)(n.strong,{children:`Wrapper (corner offsets & stacking):`})}),`
`,(0,w.jsxs)(`table`,{className:`doc-table`,children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{children:`Property`}),(0,w.jsx)(`th`,{children:`Description`}),(0,w.jsx)(`th`,{children:`Default`})]})}),(0,w.jsxs)(`tbody`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-wrapper-horizontal-offset`})}),(0,w.jsx)(`td`,{children:`Horizontal offset of the wrapper.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`1rem`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-wrapper-vertical-offset`})}),(0,w.jsx)(`td`,{children:`Vertical offset of the wrapper.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`1rem`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-wrapper-gap`})}),(0,w.jsx)(`td`,{children:`Gap between stacked toasts.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`1rem`})})]})]})]}),`
`,(0,w.jsx)(n.p,{children:(0,w.jsx)(n.strong,{children:`Typography & layout:`})}),`
`,(0,w.jsxs)(`table`,{className:`doc-table`,children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{children:`Property`}),(0,w.jsx)(`th`,{children:`Description`}),(0,w.jsx)(`th`,{children:`Default`})]})}),(0,w.jsxs)(`tbody`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-font-family`})}),(0,w.jsx)(`td`,{children:`Font family.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`inherit`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-font-size`})}),(0,w.jsx)(`td`,{children:`Font size.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`0.8rem`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-width`})}),(0,w.jsx)(`td`,{children:`Width of the toast.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`350px`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-padding-horizontal`})}),(0,w.jsx)(`td`,{children:`Horizontal padding.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`1rem`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-padding-vertical`})}),(0,w.jsx)(`td`,{children:`Vertical padding.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`0.5rem`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-actions-gap`})}),(0,w.jsx)(`td`,{children:`Gap between action buttons.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`0.25rem`})})]})]})]}),`
`,(0,w.jsx)(n.p,{children:(0,w.jsx)(n.strong,{children:`Surface (colors, border, shadow):`})}),`
`,(0,w.jsxs)(`table`,{className:`doc-table`,children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{children:`Property`}),(0,w.jsx)(`th`,{children:`Description`}),(0,w.jsx)(`th`,{children:`Default`})]})}),(0,w.jsxs)(`tbody`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-background-color`})}),(0,w.jsx)(`td`,{children:`Background.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#fff`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-content-color`})}),(0,w.jsx)(`td`,{children:`Text color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#333`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-border-color`})}),(0,w.jsx)(`td`,{children:`Border color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#ededed`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-border-width`})}),(0,w.jsx)(`td`,{children:`Border width.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`1px`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-border-radius`})}),(0,w.jsx)(`td`,{children:`Border radius.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`0.25rem`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-box-shadow`})}),(0,w.jsx)(`td`,{children:`Box shadow.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`0 4px 12px rgba(0, 0, 0, 0.1)`})})]})]})]}),`
`,(0,w.jsx)(n.p,{children:(0,w.jsx)(n.strong,{children:`Per-variant color overrides:`})}),`
`,(0,w.jsxs)(n.p,{children:[`Each variant exposes `,(0,w.jsx)(n.code,{children:`background`}),`, `,(0,w.jsx)(n.code,{children:`border`}),`, `,(0,w.jsx)(n.code,{children:`content`}),` colors. The pattern is `,(0,w.jsx)(n.code,{children:`--toastive-{variant}-{slot}-color`}),`.`]}),`
`,(0,w.jsxs)(`table`,{className:`doc-table`,children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{children:`Property`}),(0,w.jsx)(`th`,{children:`Description`}),(0,w.jsx)(`th`,{children:`Default`})]})}),(0,w.jsxs)(`tbody`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-info-content-color`})}),(0,w.jsx)(`td`,{children:`Info text color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#0973dc`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-info-background-color`})}),(0,w.jsx)(`td`,{children:`Info background.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#f0f8ff`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-info-border-color`})}),(0,w.jsx)(`td`,{children:`Info border.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#d3e0fd`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-success-content-color`})}),(0,w.jsx)(`td`,{children:`Success text color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#008a2e`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-success-background-color`})}),(0,w.jsx)(`td`,{children:`Success background.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#ecfdf3`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-success-border-color`})}),(0,w.jsx)(`td`,{children:`Success border.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#d3fde5`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-warning-content-color`})}),(0,w.jsx)(`td`,{children:`Warning text color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#dc7609`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-warning-background-color`})}),(0,w.jsx)(`td`,{children:`Warning background.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#fffcf0`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-warning-border-color`})}),(0,w.jsx)(`td`,{children:`Warning border.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#fdf5d3`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-error-content-color`})}),(0,w.jsx)(`td`,{children:`Error text color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#e60000`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-error-background-color`})}),(0,w.jsx)(`td`,{children:`Error background.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#fff0f0`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-error-border-color`})}),(0,w.jsx)(`td`,{children:`Error border.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`#ffe0e1`})})]})]})]}),`
`,(0,w.jsx)(n.p,{children:(0,w.jsx)(n.strong,{children:`Progress bar, close & action buttons:`})}),`
`,(0,w.jsxs)(`table`,{className:`doc-table`,children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{children:`Property`}),(0,w.jsx)(`th`,{children:`Description`}),(0,w.jsx)(`th`,{children:`Default`})]})}),(0,w.jsxs)(`tbody`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-progress-color`})}),(0,w.jsx)(`td`,{children:`Progress bar color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`currentColor`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-progress-height`})}),(0,w.jsx)(`td`,{children:`Progress bar height.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`0.25rem`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-progress-opacity`})}),(0,w.jsx)(`td`,{children:`Progress bar opacity.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`0.5`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-close-button-color`})}),(0,w.jsx)(`td`,{children:`Close button color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`currentColor`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-close-button-size`})}),(0,w.jsx)(`td`,{children:`Close button size.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`1rem`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-action-color`})}),(0,w.jsx)(`td`,{children:`Action text color.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`currentColor`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-action-background-color`})}),(0,w.jsx)(`td`,{children:`Action background.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`none`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-action-border-color`})}),(0,w.jsx)(`td`,{children:`Action border.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`currentColor`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-action-border-width`})}),(0,w.jsx)(`td`,{children:`Action border width.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`1px`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`--toastive-action-border-radius`})}),(0,w.jsx)(`td`,{children:`Action border radius.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`0.25rem`})})]})]})]}),`
`,(0,w.jsx)(n.h3,{id:`example--override-accent-colors`,children:`Example — override accent colors`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-css`,children:`:root {
  --toastive-success-content-color: #0c8a4f;
  --toastive-success-background-color: #e8fbf0;
  --toastive-success-border-color: #c4f0d6;

  --toastive-error-content-color: #c0392b;
  --toastive-error-background-color: #fff4f2;
  --toastive-error-border-color: #f7d3cc;
}
`})}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`-api-reference`,children:`📚 API reference`}),`
`,(0,w.jsx)(n.h3,{id:`showtoastiveprops`,children:(0,w.jsx)(n.code,{children:`showToastive(props?)`})}),`
`,(0,w.jsxs)(n.p,{children:[`Returns a `,(0,w.jsx)(n.code,{children:`ToastiveInstance`}),` with `,(0,w.jsx)(n.code,{children:`update()`}),` and `,(0,w.jsx)(n.code,{children:`close()`}),` methods.`]}),`
`,(0,w.jsxs)(`table`,{className:`doc-table`,children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{children:`Property`}),(0,w.jsx)(`th`,{children:`Description`}),(0,w.jsx)(`th`,{children:`Type`}),(0,w.jsx)(`th`,{children:`Default`})]})}),(0,w.jsxs)(`tbody`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`action`})}),(0,w.jsx)(`td`,{children:(0,w.jsxs)(n.p,{children:[`Secondary action button (`,(0,w.jsx)(`code`,{children:`label`}),`, `,(0,w.jsx)(`code`,{children:`onClick`}),`, optional`,` `,`
`,(0,w.jsx)(`code`,{children:`closeOnClick: true`}),`).`]})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`ToastiveAction`})}),(0,w.jsx)(`td`,{children:`—`})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`autoClose`})}),(0,w.jsx)(`td`,{children:(0,w.jsxs)(n.p,{children:[`Auto close after `,(0,w.jsx)(`code`,{children:`duration`}),`.`]})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`boolean`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`true`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`closeButton`})}),(0,w.jsx)(`td`,{children:`Show the close button.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`boolean`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`false`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`customIcon`})}),(0,w.jsx)(`td`,{children:`HTML string for the icon slot default content.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`string`})}),(0,w.jsx)(`td`,{children:`—`})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`draggable`})}),(0,w.jsx)(`td`,{children:`Allow dismissing by dragging.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`boolean`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`true`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`duration`})}),(0,w.jsx)(`td`,{children:`Milliseconds before auto-close.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`number`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`5000`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`message`})}),(0,w.jsx)(`td`,{children:`Message body.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`string`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`''`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`pauseOnHover`})}),(0,w.jsx)(`td`,{children:`Pause timer on hover/focus.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`boolean`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`true`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`position`})}),(0,w.jsx)(`td`,{children:`Corner of the screen.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`ToastivePosition`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`'bottom-right'`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`theme`})}),(0,w.jsx)(`td`,{children:`Color theme.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`ToastiveTheme`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`'light'`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`title`})}),(0,w.jsx)(`td`,{children:`Title.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`string`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`''`})})]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`variant`})}),(0,w.jsx)(`td`,{children:`Color variant.`}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`ToastiveVariant`})}),(0,w.jsx)(`td`,{children:(0,w.jsx)(`code`,{children:`'default'`})})]})]})]}),`
`,(0,w.jsx)(n.h3,{id:`setdefaultsprops`,children:(0,w.jsx)(n.code,{children:`setDefaults(props)`})}),`
`,(0,w.jsxs)(n.p,{children:[`Merge defaults applied to every subsequent `,(0,w.jsx)(n.code,{children:`showToastive()`}),` call. Adds `,(0,w.jsx)(n.code,{children:`maxVisible`}),` — a per-position cap (oldest closed first).`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`setDefaults({ maxVisible: 5, position: ToastivePosition.TopRight })
`})}),`
`,(0,w.jsx)(n.h3,{id:`resetdefaults`,children:(0,w.jsx)(n.code,{children:`resetDefaults()`})}),`
`,(0,w.jsxs)(n.p,{children:[`Reset every default set by `,(0,w.jsx)(n.code,{children:`setDefaults()`}),` back to the package built-ins. Useful for tests or for cleaning up at runtime.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`setDefaults({ theme: ToastiveTheme.Dark })
// ...
resetDefaults() // back to built-ins
`})}),`
`,(0,w.jsx)(n.h3,{id:`cleartoastsposition`,children:(0,w.jsx)(n.code,{children:`clearToasts(position?)`})}),`
`,(0,w.jsxs)(n.p,{children:[`Remove all toasts, or only the toasts in the given `,(0,w.jsx)(n.code,{children:`ToastivePosition`}),`.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-javascript`,children:`clearToasts() // everything
clearToasts(ToastivePosition.TopRight) // scoped
`})}),`
`,(0,w.jsxs)(n.h3,{id:`mmtoastive-element`,children:[(0,w.jsx)(n.code,{children:`MmToastive`}),` element`]}),`
`,(0,w.jsxs)(n.p,{children:[`The underlying Web Component. You only need it if you want full markup control — otherwise `,(0,w.jsx)(n.code,{children:`showToastive()`}),` covers everything.`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-html`,children:`<mm-toastive variant="success" auto-close position="bottom-right">
  <span slot="icon">⭐</span>
  <span slot="title">Saved</span>
  <span slot="message">Your changes have been stored.</span>
</mm-toastive>
`})}),`
`,(0,w.jsxs)(n.p,{children:[`It exposes the same properties as `,(0,w.jsx)(n.code,{children:`showToastive()`}),` plus `,(0,w.jsx)(n.code,{children:`close()`}),` and `,(0,w.jsx)(n.code,{children:`update()`}),` on the element instance.`]}),`
`,(0,w.jsx)(`br`,{})]})}function C(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,w.jsx)(n,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=n(),c(),s(),v()}))();export{C as default};