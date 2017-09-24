import R from 'ramda'

import $ from '../utils/html-factory.js'

import './file-drop-zone.scss'

/**
 * Adapted from https://css-tricks.com/drag-and-drop-file-uploading/
 */

const state = {
  files: [],
}
const addFilesToState = files => {
  state.files.push(...files)
  R.forEach(
    ({ name }) =>
      console.log('added file:', name),
    files
  )
  console.log('new "files" state:', state.files)
}

const inputArea = $.div({ class: 'input-area' }, [
  $.input({
    type: 'file',
    name: 'files[]',
    id: 'file',
    'data-multiple-caption':
      '{count} files selected',
    multiple: '',
  }),
  $.label(
    {
      for: 'file',
    },
    [
      $.strong({}, 'Choose a File'),
      $.span({}, ' or drag it here.'),
    ]
  ),
  $.button(
    {
      type: 'submit',
    },
    'upload'
  ),
])

const fileDropZone = $.form(
  {
    class: 'file-drop-zone',
    method: 'post',
    action: '',
    enctype: 'multipart/form-data',
  },
  [
    inputArea,
    $.div({ class: 'uploading' }, 'Uploading...'),
    $.div({ class: 'success' }, 'Done!'),
    $.div({ class: 'error' }, [
      $.span({}, 'Error!'),
      $.span({ class: 'error-content' }, []),
    ]),
  ]
)

const addEventHandler = (
  element,
  eventName,
  handler
) => {
  element.addEventListener(eventName, handler)
}

const addEventHandlers = R.curry(
  (element, eventNames, handler) => {
    eventNames.forEach(eventName => {
      addEventHandler(element, eventName, handler)
    })
  }
)

const addEventHandlersToDropZone = addEventHandlers(
  fileDropZone
)

addEventHandlersToDropZone(
  [
    'drag',
    'dragstart',
    'dragend',
    'dragover',
    'dragenter',
    'dragleave',
    'drop',
  ],
  e => {
    e.preventDefault()
    e.stopPropagation()
  }
)

addEventHandlersToDropZone(
  ['dragover', 'dragenter'],
  () => {
    fileDropZone.classList.add('is-dragover')
  }
)

addEventHandlersToDropZone(
  ['dragleave', 'dragend', 'drop'],
  () => {
    fileDropZone.classList.remove('is-dragover')
  }
)

addEventHandlersToDropZone(['drop'], e => {
  addFilesToState(e.dataTransfer.files)
})

export default fileDropZone
