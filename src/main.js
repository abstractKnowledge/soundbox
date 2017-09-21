import { p } from './html-factory.js'

import './main.scss'

const paragraph = p(
  { class: 'hello' },
  'hello world'
)

export default paragraph
