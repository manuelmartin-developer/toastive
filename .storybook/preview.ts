import type { Preview } from '@storybook/web-components-vite'
import { resetDefaults } from '../src/showToastive'

const preview: Preview = {
  decorators: [
    (storyFn, context) => {
      // Some stories (maxVisible, globalDefaults) call `setDefaults()` at
      // render time. Without this reset, those defaults leak into every
      // subsequent story across the whole docs site. Keep the module-level
      // defaults scoped to a single render.
      resetDefaults()
      return storyFn(context)
    }
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        locales: 'en-US',
        method: 'alphabetical',
        order: ['Documentation', 'Changelog']
      }
    }
  }
}

export default preview
