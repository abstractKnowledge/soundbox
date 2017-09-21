import R from 'ramda'

export const h = R.curry(
  (type, attrs = {}, children = []) => {
    const el = document.createElement(type)
    appendChildren(el, children)
    addAttributes(el, attrs)
    return el
  }
)

function appendChildren(el, children) {
  if (R.is(Array, children)) {
    children.forEach(child =>
      el.appendChild(child)
    )
  } else if (
    R.either(R.is(String), R.is(Number), children)
  ) {
    el.appendChild(
      document.createTextNode(children)
    )
  } else {
    throw new Error(
      'children must be array or string'
    )
  }
}

function addAttributes(el, attrs) {
  R.forEachObjIndexed(
    (value, name) => el.setAttribute(name, value),
    attrs
  )
}

const makeElementBuilder = type => (...args) => {
  if (args.length === 1) {
    return R.is(Array, args[0])
      ? h(type, {}, args[0])
      : h(type, args[0], [])
  }
  return h(type, ...args)
}

export const p = makeElementBuilder('p')
export const span = makeElementBuilder('span')
export const div = makeElementBuilder('div')
export const h1 = makeElementBuilder('h1')
export const h2 = makeElementBuilder('h2')
export const h3 = makeElementBuilder('h3')
export const h4 = makeElementBuilder('h4')
export const h5 = makeElementBuilder('h5')
export const h6 = makeElementBuilder('h6')
export const img = makeElementBuilder('img')
export const nav = makeElementBuilder('nav')
export const ol = makeElementBuilder('ol')
export const li = makeElementBuilder('li')
export const a = makeElementBuilder('a')
export const header = makeElementBuilder('header')
export const footer = makeElementBuilder('footer')
