import { div, p } from '../utils/html-factory.js'
import fileDropZone from './file-drop-zone'

import './app-content.scss'

const appContent = div({ class: 'app-content' }, [
  p({}, [fileDropZone]),
])

export default appContent
