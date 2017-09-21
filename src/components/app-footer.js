import {
  a,
  p,
  footer,
  img,
} from '../utils/html-factory.js'

import './app-footer.scss'

const appFooter = footer(
  { class: 'app-footer' },
  [
    a(
      {
        href:
          'https://github.com/abstractKnowledge/soundbox',
      },
      [
        p({}, 'Open Sourced on'),
        img({
          class: 'github-logo',
          alt: 'github',
          title: 'check out Sound Box on GitHub',
          src: 'images/github-logo.png',
        }),
      ]
    ),
  ]
)

export default appFooter
