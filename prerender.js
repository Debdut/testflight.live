const Url = require('url-request')

module.exports = async function () {
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

  return Apps
}