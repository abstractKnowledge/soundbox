import $ from '../utils/html-factory'
import appHeader from './app-header'
import appContent from './app-content'
import appFooter from './app-footer'

import './app-main.scss'

const main = $.div({ class: 'app-main' }, [
  appHeader,
  appContent,
  appFooter,
])

export default main
