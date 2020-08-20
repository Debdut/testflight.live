import { h } from 'preact'

export const Compy = ({ Tag, props }) => (<Tag { ...props } />)

export function desvg (svg) {
  const content = svg.content
  const attributes = svg.attributes

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