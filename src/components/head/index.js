import Helmet from 'preact-helmet'

const Head = ({ title, description, url, image = {}, manifest, twitter }) => (
  <Helmet
    title={title}
    titleTemplate='%s | Testflight App Store'
    defaultTitle='Tesflight App Store'
    meta={[
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image.android },
      { property: 'twitter:site', content: twitter },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: image.apple }
    ]}
    link={[
      { rel: 'apple-touch-icon', href: image.apple },
      { rel: 'icon', href: image.favicon },
      { rel: 'manifest', href: manifest },
    ]}
  />
)

export default Head