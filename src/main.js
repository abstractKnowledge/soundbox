import {
  a,
  h1,
  div,
  p,
  span,
  header,
  footer,
  img,
} from './html-factory.js'

import './main.scss'

const appTitle = h1(
  { class: 'app-title' },
  'Sound Box'
)

const appHeader = header(
  { class: 'app-header' },
  [appTitle]
)

const content = div({ class: 'content' }, [
  p(
    {},
    `
      Due diligence cross functional teams enable out of the box brainstorming productize market-facing, or i also believe it's important for every member to be involved and invested in our company and this is one way to do so yet social currency. Are we in agreeance please advise soonest or back to the drawing-board, i am dead inside data-point price point. This is a no-brainer personal development shotgun approach, for innovation is hot right now we need to button up our approach. Drink the Kool-aid. Going forward can you ballpark the cost per unit for me we need to start advertising on social media nor forcing function we need more paper. Globalize. Not the long pole in my tent it just needs more cowbell shotgun approach, but shoot me an email and baseline for strategic staircase, back of the net. Highlights . This proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables work flows hard stop, for strategic fit on-brand but completeley fresh.
      `
  ),
])

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

const main = div({ class: 'main' }, [
  appHeader,
  content,
  appFooter,
])

export default main
