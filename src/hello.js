import { p } from './html-factory.js'

import './hello.scss'

const paragraph = p(
  { class: 'hello' },
  'hello world'
)

export default paragraph
