import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: 'rgb(39 125 161 / 92%)',
    colorSecondary: '#1ea7fd',
    appBg: '#f7f7f7',
    appContentBg: '#ffffff',
    appBorderColor: '#e6e6e6',
    appBorderRadius: 4,
    fontBase: "Helvetica, 'Arial', sans-serif",
    fontCode: 'monospace',
    textColor: '#333333',
    textInverseColor: '#ffffff',
    barTextColor: '#999999',
    barSelectedColor: '#1ea7fd',
    barBg: '#ffffff',
    inputBg: '#ffffff',
    inputBorder: '#e6e6e6',
    inputTextColor: '#333333',
    inputBorderRadius: 4,
    brandTitle: 'Toastive',
    brandImage: '/assets/logo.png'
  })
})
