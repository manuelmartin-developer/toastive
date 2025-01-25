![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label) [![npm](https://img.shields.io/npm/v/toastive.svg)](https://www.npmjs.com/package/toastive) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/toastive?style=flat-square)](https://bundlephobia.com/package/toastive@latest) [![install size](https://packagephobia.com/badge?p=toastive)](https://packagephobia.com/result?p=toastive) [![npm downloads](https://img.shields.io/npm/dt/toastive.svg?style=flat-square)](https://npm-stat.com/charts.html?package=toastive)

<!-- Logo -->
<p align="center">
<img src="/public/assets/logo.png" alt="Toastive logo" />
</p>

# Toastive

<p align="center">
<a href="https://toastive.manuelmartin.dev" target="_blank">
<img src="https://img.shields.io/badge/storybook-demo-FF4785?style=for-the-badge&logo=storybook" alt="Storybook" />
</a>

## 👀 Overview

Toastive is a lightweight, highly customizable, and easy-to-use native web component library for creating toast notifications.

Some of the key features include:

- 🪶 **Lightweight**: The minified version is less than 5KB.
- 🎨 **Customizable**: Easily customize the appearance of the toasts. More than 30 css variables to styling a toast that you will love.
- 🚀 **Easy to use**: Just one `showToastive()` method is enought!.
- 📦 **Zero dependencies**: No dependencies required.
- 🌐 **Cross-browser**: Works in all modern or older browser that suporrt web components.
- 📱 **Responsive**: Works on all devices.
- 🌈 **Themes**: Comes with variants out of the box.

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

| Property   | Description | Type    | Default |
|------------|-------------|---------|---------|
| autoClose  | Auto close the toast after a specified time (in milliseconds). | boolean | true |
| closeButton | Show a close button in the toast. | boolean | false |
| duration   | The duration of the toast in milliseconds (only if \`autoClose\` is set to \`true\`). | number | 5000 |
| message    | The message to display in the toast. | string | '' |
| title      | The title of the toast. | string | '' |
| position   | The position of the toast. | ToastivePosition | 'bottom-right' |
| variant	| The variant of the toast. | ToastiveVariant | 'default' |

### Types

Toastive library is fully developed with TypeScript. So, you can use the types in your project.

```typescript
import { ToastivePosition, ToastiveProps, ToastiveVariant } from 'toastive'
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

> **All toast can be closed by dragging them to the right or left side of the screen, depending on the position of the toast. These gestures are enabled by default and it's fully compatible with touch devices.**

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

## 💅 Styling

Toastive is fully customizable. You can easily customize the appearance of the toasts by using next CSS variables.

### Wrapper

| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-wrapper-horizontal-offset | The horizontal offset of the toast wrapper. | 1rem |
| --toastive-wrapper-vertical-offset | The vertical offset of the toast wrapper. | 1rem |
| --toastive-wrapper-gap | The gap between toasts. | 1rem |



### Font

| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-font-family | The font family of the toast. | inherit |
| --toastive-font-size | The font size of the toast. | 0.8rem |


### Colors


| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-content-color | The color of the toast content. | #333 |
| --toastive-background-color | The background color of the toast. | #fff |


### Border

| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-border-radius | The border radius of the toast. | 0.25rem |
| --toastive-border-width | The border width of the toast. | 1px |
| --toastive-border-color | The border color of the toast. | #ededed |


### Shadow

| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-box-shadow | The box shadow of the toast. | 0 4px 12px rgba(0, 0, 0, 0.1) |


### Layout

| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-padding-horizontal | The horizontal padding of the toast. | 1rem |
| --toastive-padding-vertical | The vertical padding of the toast. | 0.5rem |
| --toastive-width | The width of the toast. | 350px |


### Close button

| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-close-button-color | The color of the close button. | currentColor |
| --toastive-close-button-size | The size of the close button. | 1rem |


### Progress bar

| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-progress-height | The height of the progress bar. | 0.25rem |
| --toastive-progress-color | The color of the progress bar. | currentColor |
| --toastive-progress-opacity | The opacity of the progress bar. | 0.5 |


### Variants

| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-info-content-color | The color of the toast content for the info variant. | #0973dc |
| --toastive-info-background-color | The background color of the toast for the info variant. | #f0f8ff |
| --toastive-info-border-color | The border color of the toast for the info variant. | #b0e2ff |
| --toastive-error-content-color | The color of the toast content for the error variant. | #e60000 |
| --toastive-error-background-color | The background color of the toast for the error variant. | #fff0f0 |
| --toastive-error-border-color | The border color of the toast for the error variant. | #ffe0e1 |
| --toastive-warning-content-color | The color of the toast content for the warning variant. | #dc7609 |
| --toastive-warning-background-color | The background color of the toast for the warning variant. | #fffcf0 |
| --toastive-warning-border-color | The border color of the toast for the warning variant. | #fdf5d3 |
| --toastive-success-content-color | The color of the toast content for the success variant. | #008a2e |
| --toastive-success-background-color | The background color of the toast for the success variant. | #ecfdf3 |
| --toastive-success-border-color | The border color of the toast for the success variant. | #d3fde5 |


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
