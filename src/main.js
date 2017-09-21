import { h1 } from './html-factory.js'

import './main.scss'

const appTitle = h1(
  { class: 'app-title' },
  'Sound Box'
)

export default appTitle
