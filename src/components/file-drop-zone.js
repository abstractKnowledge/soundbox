import {
  div,
  form,
  input,
  label,
  strong,
  button,
  span,
} from '../utils/html-factory.js'

import './file-drop-zone.scss'

/**
 * Adapted from https://css-tricks.com/drag-and-drop-file-uploading/
 */

const inputArea = div({ class: 'input-area' }, [
  input({
    type: 'file',
    name: 'files[]',
    id: 'file',
    'data-multiple-caption':
      '{count} files selected',
    multiple: '',
  }),
  label(
    {
      for: 'file',
    },
    [
      strong({}, 'Choose a File'),
      span({}, ' or drag it here.'),
    ]
  ),
  button(
    {
      type: 'submit',
    },
    'upload'
  ),
])

const fileDropZone = form(
  {
    class: 'file-drop-zone',
    method: 'post',
    action: '',
    enctype: 'multipart/form-data',
  },
  [
    inputArea,
    div({ class: 'uploading' }, 'Uploading...'),
    div({ class: 'success' }, 'Done!'),
    div({ class: 'error' }, [
      span({}, 'Error!'),
      span({ class: 'error-content' }, []),
    ]),
  ]
)

export default fileDropZone
