import { apply, setup, theme, tw } from 'twind'
import { FerryComponent } from './components/ferry-component'
import { css } from 'twind/css'

/**
 * Setup Twind
 */
setup({
  preflight: false,
  hash: true,
  theme: {
    extend: {
      colors: {
        'gray-100': '#F5F5F5',
        'gray-200': '#DDDDDD',
        'black-100': '#000000',
        'blue-500': '#2A2B57',
      },
      screens: {
        md: '992px',
        lg: '1200px',
      },
    },
  },
})

export const App = () => {
  return <FerryComponent />
}
