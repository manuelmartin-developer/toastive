import{j as e,M as l,a as o,S as r,C as c,b as n}from"./index-AKaiPiw4.js";import{useMDXComponents as a}from"./index-CoVQ9bSo.js";import{T as h,p as d,c as p,u as f}from"./toastive.stories-CGprLUDS.js";import"./iframe-D9i1eKam.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";function i(s){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(t.h2,{id:"-overview",children:"👀 Overview"}),`
`,e.jsx(t.p,{children:"Toastive is a lightweight, highly customizable, and easy-to-use native web component library for creating toast notifications."}),`
`,e.jsx(t.p,{children:"Some of the key features include:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["🪶 ",e.jsx(t.strong,{children:"Lightweight"}),": The minified version is less than 5KB."]}),`
`,e.jsxs(t.li,{children:["🎨 ",e.jsx(t.strong,{children:"Customizable"}),": Easily customize the appearance of the toasts. More than 30 css variables to styling a toast that you will love."]}),`
`,e.jsxs(t.li,{children:["🚀 ",e.jsx(t.strong,{children:"Easy to use"}),": Just one ",e.jsx(t.code,{children:"showToastive()"})," method is enought!."]}),`
`,e.jsxs(t.li,{children:["📦 ",e.jsx(t.strong,{children:"Zero dependencies"}),": No dependencies required."]}),`
`,e.jsxs(t.li,{children:["🌐 ",e.jsx(t.strong,{children:"Cross-browser"}),": Works in all modern or older browser that suporrt web components."]}),`
`,e.jsxs(t.li,{children:["📱 ",e.jsx(t.strong,{children:"Responsive"}),": Works on all devices."]}),`
`,e.jsxs(t.li,{children:["🌈 ",e.jsx(t.strong,{children:"Themes"}),": Comes with variants out of the box."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"-installation",children:"📦 Installation"}),`
`,e.jsx(t.h3,{id:"npm",children:"NPM"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install toastive
`})}),`
`,e.jsx(t.h3,{id:"yarn",children:"Yarn"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`yarn add toastive
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"-usage",children:"🚀 Usage"}),`
`,e.jsx(t.p,{children:"Toastive element is, at the end of the day, a web component. So, you can use it like any other web component. However, we also provide a simple API to make it easier to use."}),`
`,e.jsx(t.h3,{id:"import-the-module",children:"Import the module"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { showToastive } from 'toastive'
`})}),`
`,e.jsx(t.h3,{id:"showtoastive",children:e.jsx(t.code,{children:"showToastive()"})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"showToastive()"})," method is the simplest way to show a toast notification. It accepts an object with the following properties:"]}),`
`,e.jsx(o,{children:`
| Property   | Description | Type    | Default |
|------------|-------------|---------|---------|---------|
| autoClose  | Auto close the toast after a specified time (in milliseconds). | boolean | true |
| closeButton | Show a close button in the toast. | boolean | false |
| duration   | The duration of the toast in milliseconds (only if \`autoClose\` is set to \`true\`). | number | 5000 |
| message    | The message to display in the toast. | string | '' |
| title      | The title of the toast. | string | '' |
| position   | The position of the toast. | ToastivePosition | 'bottom-right' |
| variant	| The variant of the toast. | ToastiveVariant | 'default' |
	`}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.p,{children:"Toastive library is fully developed with TypeScript. So, you can use the types in your project."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { ToastivePosition, ToastiveProps, ToastiveVariant } from 'toastive'
`})}),`
`,e.jsx(t.h3,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { showToastive, ToastiveProps, ToastivePosition, ToastiveVariant } from 'toastive'

showToastive({
	title: 'Toastive',
	message: '👋 Hi from top-right corner!',
	position: ToastivePosition.TopRight,
	variant: ToastiveVariant.Success,
	autoClose: true,
	duration: 5000,
	closeButton: false
})
`})}),`
`,e.jsx(t.p,{children:"Code above will show a toast notification with a success variant, a title, and a message. The toast will be displayed in the top-right corner of the screen and will automatically close after 5 seconds."}),`
`,e.jsx(r,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h3,{id:"closing-a-toastive",children:"Closing a toastive"}),`
`,e.jsxs(t.p,{children:["Toasts are widely used in applications to show notifications to users. However, these notifications should not be blocking the user, so in terms of UX, it is advisable to use the default ",e.jsx(t.code,{children:"autoClose"})," property."]}),`
`,e.jsxs(t.p,{children:["However, sometimes you may want to allow the user to close the toast manually. You can do this by setting the ",e.jsx(t.code,{children:"closeButton"})," property to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`showToastive({
	title: 'Toastive',
	message: '👋 Hi from top-right corner!',
	position: ToastivePosition.TopRight,
	variant: ToastiveVariant.Success,
	autoClose: false,
	closeButton: true
})
`})}),`
`,e.jsx(r,{of:p}),`
`,e.jsxs(t.p,{children:["Additionally, you can close a toastive manually by calling the ",e.jsx(t.code,{children:"close()"})," method."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const toast = showToastive({
	title: 'Toastive',
	message: '👋 Hi from top-right corner!',
	position: ToastivePosition.TopRight,
	variant: ToastiveVariant.Success,
	autoClose: false,
	closeButton: true
})

// Do something...
toast.close()
`})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"All toast can be closed by dragging them to the right or left side of the screen, depending on the position of the toast. These gestures are enabled by default and it's fully compatible with touch devices."})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h3,{id:"updating-a-toastive",children:"Updating a toastive"}),`
`,e.jsxs(t.p,{children:["You can update a toastive by calling the ",e.jsx(t.code,{children:"update()"})," method. This method accepst same properties as ",e.jsx(t.code,{children:"showToastive()"})," method, except the ",e.jsx(t.code,{children:"position"})," property."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const toast = showToastive({
	title: 'Toastive',
	message: '👋 Hi from top-right corner!',
	position: ToastivePosition.TopRight,
	variant: ToastiveVariant.Loading,
	autoClose: false
})

// Do something...
toast.update({
	title: 'Updated title',
	message: 'Updated message',
	variant: ToastiveVariant.Success,
	autoClose: true
})
`})}),`
`,e.jsx(r,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"-color-pallete",children:"🎨 Color pallete"}),`
`,e.jsxs(c,{children:[e.jsx(n,{name:"Default & Loading",subtitle:"Default color pallete",colors:{Background:"#fff",Border:"#ededed",Content:"#333"}}),e.jsx(n,{name:"Info",subtitle:"Info color pallete",colors:{Background:"#f0f8ff",Border:"#b0e2ff",Content:"#0973dc"}}),e.jsx(n,{name:"Error",subtitle:"Error color pallete",colors:{Background:"#fff0f0",Border:"#ffe0e1",Content:"#e60000"}}),e.jsx(n,{name:"Warning",subtitle:"Warning color pallete",colors:{Background:"#fffcf0",Border:"#fdf5d3",Content:"#dc7609"}}),e.jsx(n,{name:"Success",subtitle:"Success color pallete",colors:{Background:"#ecfdf3",Border:"#d3fde5",Content:"#008a2e"}})]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"-styling",children:"💅 Styling"}),`
`,e.jsx(t.p,{children:`Toastive is fully customizable. You can easily customize the appearance of the toasts by using next CSS
variables.`}),`
`,e.jsx(t.h3,{id:"wrapper",children:"Wrapper"}),`
`,e.jsx(o,{children:`
| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-wrapper-horizontal-offset | The horizontal offset of the toast wrapper. | 1rem |
| --toastive-wrapper-vertical-offset | The vertical offset of the toast wrapper. | 1rem |
| --toastive-wrapper-gap | The gap between toasts. | 1rem |

    `}),`
`,e.jsx(t.h3,{id:"font",children:"Font"}),`
`,e.jsx(o,{children:`
| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-font-family | The font family of the toast. | inherit |
| --toastive-font-size | The font size of the toast. | 0.8rem |

    `}),`
`,e.jsx(t.h3,{id:"colors",children:"Colors"}),`
`,e.jsx(o,{children:`
| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-content-color | The color of the toast content. | #333 |
| --toastive-background-color | The background color of the toast. | #fff |

    `}),`
`,e.jsx(t.h3,{id:"border",children:"Border"}),`
`,e.jsx(o,{children:`
| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-border-radius | The border radius of the toast. | 0.25rem |
| --toastive-border-width | The border width of the toast. | 1px |
| --toastive-border-color | The border color of the toast. | #ededed |

    `}),`
`,e.jsx(t.h3,{id:"shadow",children:"Shadow"}),`
`,e.jsx(o,{children:`
| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-box-shadow | The box shadow of the toast. | 0 4px 12px rgba(0, 0, 0, 0.1) |

    `}),`
`,e.jsx(t.h3,{id:"layout",children:"Layout"}),`
`,e.jsx(o,{children:`
| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-padding-horizontal | The horizontal padding of the toast. | 1rem |
| --toastive-padding-vertical | The vertical padding of the toast. | 0.5rem |
| --toastive-width | The width of the toast. | 350px |

    `}),`
`,e.jsx(t.h3,{id:"close-button",children:"Close button"}),`
`,e.jsx(o,{children:`
| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-close-button-color | The color of the close button. | currentColor |
| --toastive-close-button-size | The size of the close button. | 1rem |

    `}),`
`,e.jsx(t.h3,{id:"progress-bar",children:"Progress bar"}),`
`,e.jsx(o,{children:`
| Property   | Description | Default |
|------------|-------------|---------|
| --toastive-progress-height | The height of the progress bar. | 0.25rem |
| --toastive-progress-color | The color of the progress bar. | currentColor |
| --toastive-progress-opacity | The opacity of the progress bar. | 0.5 |

    `}),`
`,e.jsx(t.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(o,{children:`
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

    `}),`
`,e.jsx(t.h3,{id:"example-1",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`:root {
	--toastive-wrapper-horizontal-offset: 2rem;
	--toastive-wrapper-vertical-offset: 2rem;
	--toastive-wrapper-gap: 0.5rem;

	--toastive-font-family: 'Arial', sans-serif;
	--toastive-font-size: 1.2rem;

	--toastive-content-color: #ccc;
	--toastive-background-color: #333;
}
`})}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t.p,{children:"All these properties and styles can be easily tested in our playground."}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"/story/documentation-toastive--playground",children:"Open the playground"})})]})}function T(s={}){const{wrapper:t}={...a(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{T as default};
