const Url = require('url-request')

async function render () {
  const Data = await (Url(`https://api.testflight.live/apps/?_embed=screenshots&_embed=icons`)
    .get())

  const Apps = Data
    .map(d => {
      const app = {}
      app.app = d
      app.url = `/app/${d.id}`
      app.title = `${d.name} - ${d.categories} | Testflight App Store`
      return app
    })

  const categoryList = (await (Url('https://api.testflight.live/categories')
    .get()))
  
  let Categories = []
  for (let i = 0; i < categoryList.length; i++) {
    const c = categoryList[i]
    const category = {}
    category.apps = await (Url(`https://api.testflight.live/apps?_embed=icons&categories_like=${c.name}`)
      .get())
    category.url = `/category/${c.name}`
    category.title = `Category - ${c.name} | Testflight App Store`
    Categories.push(category)
  }

  return [ ...Categories, ...Apps ]
}

module.exports = render