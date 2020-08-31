import { h } from 'preact'

export const Compy = ({ Tag, props }) => (<Tag { ...props } />)

export function desvg (svg) {
  const content = svg.content
  const attributes = svg.attributes

  delete attributes['xmlns:xlink']
  
  return function (props) {
    return h(
      'svg',
      Object.assign(
        { dangerouslySetInnerHTML: { __html: content } },
        attributes,
        props
      )
    )
  }
}

export function SVGComponent (content) {
  const match = content.match(/<svg([^>]+)+>([\s\S]+)<\/svg>/i)
  let attributes = {}

  if (match) {
    attributes = match[1]
    if (attributes) {
      attributes = attributes.match(/([\w-:]+)(=)?("[^<>"]*"|'[^<>']*'|[\w-:]+)/g)
        .reduce((obj, attr) => {
          const split = attr.split('=')
          const name = split[0]
          let value = true
          if (split && split[1]) {
            value = split[1].replace(/['"]/g, '')
          }
          obj[name] = value
          return obj
        }, {})
    }

    content = match[2] || ''
  }

  content = content.replace(/\n/g, ' ').trim()
  const svg = { attributes, content }
	return desvg(svg)
}
