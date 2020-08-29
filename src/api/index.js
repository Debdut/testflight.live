
import Url from 'url-request'

const Base = Url('https://api.testflight.live')

const Apps = () => Base
  .fork()
  .go('apps')

const Categories = () => Base
  .fork()
  .go('categories')

const App = (id) => Apps()
  .go(id)

export default { Apps, App, Categories, Base }