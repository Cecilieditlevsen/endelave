import {setup, tw} from 'twind'
import {FerryComponent} from './components/ferry-component'

/**
 * Setup Twind
 */
setup({
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
  return (
    <div className={tw`w-full py-12`}>
      <div className={tw`max-w-[1400px] mx-auto px-4`}>
        <FerryComponent />
      </div>
    </div>
  )
}
