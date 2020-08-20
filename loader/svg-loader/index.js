function svg (content) {
	this.cacheable && this.cacheable()

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
  this.value = content

	const source = preactify({ attributes, content })
  return source
}

function preactify (content) {
  return `
  import { desvg } from '@/components/util'
  const svg = ${JSON.stringify(content)}
  const SVGComponent = desvg(svg)
  export default SVGComponent
  `
}

module.exports = svg
module.exports.seperable = true