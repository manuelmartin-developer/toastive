![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label) [![npm](https://img.shields.io/npm/v/toastive.svg)](https://www.npmjs.com/package/toastive) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/toastive@latest?style=flat-square)](https://bundlephobia.com/package/toastive@latest) [![install size](https://packagephobia.com/badge?p=toastive@latest)](https://packagephobia.com/result?p=toastive@latest) [![npm downloads](https://img.shields.io/npm/dt/toastive.svg?style=flat-square)](https://npm-stat.com/charts.html?package=toastive)

<!-- Logo -->
<p align="center">
<img src="public/assets/logo.png" alt="Toastive logo" />
</p>

# Toastive

<p align="center">
<a href="https://toastive.manuelmartin.dev" target="_blank">
<img src="https://img.shields.io/badge/storybook-demo-FF4785?style=for-the-badge&logo=storybook" alt="Storybook" />
</a>

## 👀 Overview

Toastive is a lightweight, accessible, and fully customizable native web component library for creating toast notifications.

Some of the key features include:

- 🪶 **Lightweight**: ~6 KB gzipped, zero dependencies.
- ♿ **Accessible**: ARIA roles, keyboard support, focus management, `prefers-reduced-motion`.
- 🎨 **Customizable**: 30+ CSS variables to style every detail.
- 🚀 **Easy to use**: one function call — `showToastive(props)`.
- 📦 **Zero dependencies**: ESM-only, no runtime deps.
- 🌐 **Framework-agnostic**: vanilla web component, works with React, Vue, Svelte, Angular.
- ⏸ **`pauseOnHover`**: timer pauses on hover/focus.
- 🖐 **Drag to dismiss**: vertical drag toward the toast's corner.
- 🌈 **Themes**: 6 variants + light/dark color themes.

<br />

## 📦 Installation

### NPM

```bash
npm install toastive
```

### Yarn

```bash
yarn add toastive
```

<br />

## 🚀 Usage

Toastive element is, at the end of the day, a web component. So, you can use it like any other web component. However, we also provide a simple API to make it easier to use.

### Import the module

```javascript
import { showToastive } from 'toastive'
```

### `showToastive()`

The `showToastive()` method is the simplest way to show a toast notification. It accepts an object with the following properties:

| Property      | Description                                                                                          | Type             | Default        |
| ------------- | ---------------------------------------------------------------------------------------------------- | ---------------- | -------------- |
| action        | Secondary action button. `{ label, onClick, closeOnClick? }`.                                       | ToastiveAction   | —              |
| autoClose     | Auto close the toast after a specified time (in milliseconds).                                       | boolean          | true           |
| closeButton   | Show a close button in the toast.                                                                    | boolean          | false          |
| customIcon    | HTML string for the icon slot default content.                                                       | string           | ''             |
| draggable     | Allow the toast to be closed by dragging it.                                                         | boolean          | true           |
| duration      | The duration of the toast in milliseconds (only if `autoClose` is set to `true`).                | number           | 5000           |
| message       | The message to display in the toast.                                                                 | string           | ''             |
| pauseOnHover  | Pause the auto-close timer while the toast is hovered or focused.                                     | boolean          | true           |
| position      | The position of the toast.                                                                           | ToastivePosition | 'bottom-right' |
| theme         | Color theme. \`light\` is default; pass \`dark\` for dark theme.                                     | ToastiveTheme    | 'light'        |
| title         | The title of the toast.                                                                              | string           | ''             |
| variant       | The variant of the toast.                                                                            | ToastiveVariant  | 'default'      |

### Types

Toastive library is fully developed with TypeScript. So, you can use the types in your project.

```typescript
import {
  MmToastive,
  ToastiveInstance,
  ToastivePosition,
  ToastiveProps,
  ToastiveTheme,
  ToastiveVariant
} from 'toastive'
```

### Example

```javascript
import { showToastive, ToastiveProps, ToastivePosition, ToastiveVariant } from 'toastive'

showToastive({
  title: 'Toastive',
  message: '👋 Hi from top-right corner!',
  position: ToastivePosition.TopRight,
  variant: ToastiveVariant.Success,
  autoClose: true,
  duration: 5000,
  closeButton: false
})
```

Code above will show a toast notification with a success variant, a title, and a message. The toast will be displayed in the top-right corner of the screen and will automatically close after 5 seconds.

<br />

### Closing a toastive

Toasts are widely used in applications to show notifications to users. However, these notifications should not be blocking the user, so in terms of UX, it is advisable to use the default `autoClose` property.

However, sometimes you may want to allow the user to close the toast manually. You can do this by setting the `closeButton` property to `true`.

```javascript
showToastive({
  title: 'Toastive',
  message: '👋 Hi from top-right corner!',
  position: ToastivePosition.TopRight,
  variant: ToastiveVariant.Success,
  autoClose: false,
  closeButton: true
})
```

Additionally, you can close a toastive manually by calling the `close()` method.

```javascript
const toast = showToastive({
  title: 'Toastive',
  message: '👋 Hi from top-right corner!',
  position: ToastivePosition.TopRight,
  variant: ToastiveVariant.Success,
  autoClose: false,
  closeButton: true
})

// Do something...
toast.close()
```

> **All toast can be closed by dragging them to the right or left side of the screen, depending on the position of the toast. These gestures are enabled by default and it's fully compatible with touch devices. You can disable this feature by setting the `draggable` property to `false`.**

<br />

### Accessibility & UX

Toastive ships with sensible accessibility defaults so you don't have to wire them up:

- **`role` / `aria-live`**: `success`, `info` and `loading` toasts are announced politely (`role="status"` + `aria-live="polite"`); `error` and `warning` toasts are announced assertively (`role="alert"` + `aria-live="assertive"`).
- **`aria-atomic="true"`**: screen readers read the whole toast on each update, not just the diff.
- **Close button** has `aria-label="Close notification"`.
- **Keyboard support**: each toast is focusable (`tabindex="0"`); press <kbd>Tab</kbd> to reach it and <kbd>Esc</kbd> to close it.
- **`prefers-reduced-motion`**: CSS animations and the JS exit animation are skipped when the user has the OS preference set.
- **`pauseOnHover`**: by default the auto-close timer and progress bar pause while the toast is hovered or focused, and resume when it leaves.

You can disable `pauseOnHover` per toast:

```javascript
showToastive({
  message: 'Strict timer',
  pauseOnHover: false
})
```

<br />

### Dark mode

Each toast accepts a `theme` prop:

| Value   | Behaviour     |
| ------- | ------------- |
| `light` | Light theme. **Default.** |
| `dark`  | Dark theme.   |

The theme is **per toast** — it does not auto-detect from the OS, because the host page may not have its own dark theme implemented. Pass `theme: ToastiveTheme.Dark` explicitly when you want a dark toast, or set it globally via `setDefaults()`.

```javascript
showToastive({
  message: 'Always dark',
  theme: ToastiveTheme.Dark
})
```

<br />

### Global defaults

Use `setDefaults()` to apply options to every subsequent `showToastive()` call. Useful when you want a global `position` or `duration` once at startup instead of repeating them.

```javascript
import { setDefaults, ToastivePosition } from 'toastive'

setDefaults({
  position: ToastivePosition.TopRight,
  duration: 3000
})
```

`setDefaults()` also accepts `maxVisible`, which caps the number of active toasts **per position** (FIFO eviction):

```javascript
setDefaults({ maxVisible: 5 })  // each wrapper holds at most 5 toasts
```

<br />

### Clearing toasts

Use `clearToasts()` to remove active toasts. Pass a position to scope the clear, or omit it to remove every active toast.

```javascript
import { clearToasts, ToastivePosition } from 'toastive'

clearToasts()                              // remove everything
clearToasts(ToastivePosition.TopRight)     // remove only top-right toasts
```

<br />

### Updating a toastive

You can update a toastive by calling the `update()` method. This method accepst same properties as `showToastive()` method.

```javascript
const toast = showToastive({
  title: 'Toastive',
  message: '👋 Hi from top-right corner!',
  position: ToastivePosition.TopRight,
  variant: ToastiveVariant.Loading,
  autoClose: false,
  closeButton: true
})

// Do something...
toast.update({
  title: 'Updated title',
  message: 'Updated message',
  variant: ToastiveVariant.Warning,
  autoClose: true
})
```

<br />

### Action button

Add a secondary action button (typically used for "Undo", "Retry", "View", etc.):

```javascript
showToastive({
  message: 'File deleted',
  action: {
    label: 'Undo',
    onClick: () => restoreFile(),
    closeOnClick: true  // default; pass false to keep the toast open
  }
})
```

<br />

### Custom content via slots

For full markup control, instantiate `MmToastive` directly and use the built-in slots (`icon`, `title`, `message`). You can also pass an HTML string for the icon via `customIcon`:

```javascript
showToastive({
  message: 'Custom icon',
  customIcon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>'
})
```

<br />

## 💅 Styling

Toastive is fully customizable. You can easily customize the appearance of the toasts by using next CSS variables.

### Wrapper

| Property                             | Description                                 | Default |
| ------------------------------------ | ------------------------------------------- | ------- |
| --toastive-wrapper-horizontal-offset | The horizontal offset of the toast wrapper. | 1rem    |
| --toastive-wrapper-vertical-offset   | The vertical offset of the toast wrapper.   | 1rem    |
| --toastive-wrapper-gap               | The gap between toasts.                     | 1rem    |

### Font

| Property               | Description                   | Default |
| ---------------------- | ----------------------------- | ------- |
| --toastive-font-family | The font family of the toast. | inherit |
| --toastive-font-size   | The font size of the toast.   | 0.8rem  |

### Colors

| Property                    | Description                        | Default |
| --------------------------- | ---------------------------------- | ------- |
| --toastive-content-color    | The color of the toast content.    | #333    |
| --toastive-background-color | The background color of the toast. | #fff    |

### Border

| Property                 | Description                     | Default |
| ------------------------ | ------------------------------- | ------- |
| --toastive-border-radius | The border radius of the toast. | 0.25rem |
| --toastive-border-width  | The border width of the toast.  | 1px     |
| --toastive-border-color  | The border color of the toast.  | #ededed |

### Shadow

| Property              | Description                  | Default                       |
| --------------------- | ---------------------------- | ----------------------------- |
| --toastive-box-shadow | The box shadow of the toast. | 0 4px 12px rgba(0, 0, 0, 0.1) |

### Layout

| Property                      | Description                          | Default |
| ----------------------------- | ------------------------------------ | ------- |
| --toastive-padding-horizontal | The horizontal padding of the toast. | 1rem    |
| --toastive-padding-vertical   | The vertical padding of the toast.   | 0.5rem  |
| --toastive-width              | The width of the toast.              | 350px   |

### Close button

| Property                      | Description                    | Default      |
| ----------------------------- | ------------------------------ | ------------ |
| --toastive-close-button-color | The color of the close button. | currentColor |
| --toastive-close-button-size  | The size of the close button.  | 1rem         |
| --toastive-action-color      | The color of the action button. | currentColor |

### Progress bar

| Property                    | Description                      | Default      |
| --------------------------- | -------------------------------- | ------------ |
| --toastive-progress-height  | The height of the progress bar.  | 0.25rem      |
| --toastive-progress-color   | The color of the progress bar.   | currentColor |
| --toastive-progress-opacity | The opacity of the progress bar. | 0.5          |

### Variants

| Property                            | Description                                                | Default |
| ----------------------------------- | ---------------------------------------------------------- | ------- |
| --toastive-info-content-color       | The color of the toast content for the info variant.       | #0973dc |
| --toastive-info-background-color    | The background color of the toast for the info variant.    | #f0f8ff |
| --toastive-info-border-color        | The border color of the toast for the info variant.        | #b0e2ff |
| --toastive-error-content-color      | The color of the toast content for the error variant.      | #e60000 |
| --toastive-error-background-color   | The background color of the toast for the error variant.   | #fff0f0 |
| --toastive-error-border-color       | The border color of the toast for the error variant.       | #ffe0e1 |
| --toastive-warning-content-color    | The color of the toast content for the warning variant.    | #dc7609 |
| --toastive-warning-background-color | The background color of the toast for the warning variant. | #fffcf0 |
| --toastive-warning-border-color     | The border color of the toast for the warning variant.     | #fdf5d3 |
| --toastive-success-content-color    | The color of the toast content for the success variant.    | #008a2e |
| --toastive-success-background-color | The background color of the toast for the success variant. | #ecfdf3 |
| --toastive-success-border-color     | The border color of the toast for the success variant.     | #d3fde5 |

### Example

```css
:root {
  --toastive-wrapper-horizontal-offset: 2rem;
  --toastive-wrapper-vertical-offset: 2rem;
  --toastive-wrapper-gap: 0.5rem;

  --toastive-font-family: 'Arial', sans-serif;
  --toastive-font-size: 1.2rem;

  --toastive-content-color: #ccc;
  --toastive-background-color: #333;
}
```
