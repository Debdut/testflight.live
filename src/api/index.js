
import Url from 'url-request'

const Base = Url('http://testflight.live:1729')

const Apps = () => Base
  .fork()
  .go('apps')

const Categories = () => Base
  .fork()
  .go('categories')

const App = (id) => Apps()
  .go(id)

export default { Apps, App, Categories, Base }