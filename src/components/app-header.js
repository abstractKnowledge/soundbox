import $ from '../utils/html-factory.js'

import './app-header.scss'

const appTitle = $.h1(
  { class: 'app-title' },
  'Sound Box'
)

const appHeader = $.header(
  { class: 'app-header' },
  [appTitle]
)

export default appHeader
