
import Url from 'url-request'

const Base = Url('http://localhost:1729')

const Apps = () => Base
  .fork()
  .go('apps')

const Categories = () => Base
  .fork()
  .go('categories')

const Category = (q) => Categories()
  .query(q)

const App = (q) => Apps()
  .query(q)

export default { Apps, Categories, App, Base, Category }