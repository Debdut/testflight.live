const Url = require('url-request')

async function render () {
  const AppData = await (Url(`https://api.testflight.live/apps/?_embed=screenshots&_embed=icons`)
    .get())

  const categoryList = await (Url('https://api.testflight.live/categories')
    .get())

  const Apps = AppData
    .map(d => {
      const app = {}
      app.app = d
      app.url = `/app/${d.id}`
      app.title = `${d.name} - ${d.categories} | Testflight App Store`
      return app
    })
  
  for (let i = 0; i < Apps.length; i++) {
    const app = Apps[i].app
    const devId = app.devId
    if (devId) {
      const dev = await (Url(`https://api.testflight.live/devs/${devId}?_embed=avatars`)
		.get())
      app.dev = dev
      Apps[i].categories = categoryList
    }
  }

  
  let Categories = []
  for (let i = 0; i < categoryList.length; i++) {
    const c = categoryList[i]
    const category = {}
    category.apps = await (Url(`https://api.testflight.live/apps?_embed=icons&categories_like=${c}`)
      .get())
    category.url = `/category/${c}`
    category.title = `Category - ${c} | Testflight App Store`
    Categories.push(category)
  }

  const index =  [{ url: '/', title: 'Testflight App Store | Discover Amazing Apps', categories: categoryList }]
  
  return [ ...index, ...Categories, ...Apps ]
}

module.exports = render