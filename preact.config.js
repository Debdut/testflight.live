import path from 'path'
import tailwind from 'preact-cli-tailwind'

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers)
  config.resolve.alias['@'] = path.resolve(__dirname, 'src/')

  config.resolveLoader.modules.push(path.resolve(__dirname, 'loader'))
  
  for (let index = 0; index < config.module.rules.length; index++) {
    const rule = config.module.rules[index]
    if (rule.loader === 'url-loader') {
      rule.test = /\.(woff2?|ttf|eot|jpe?g|png|webp|gif|mp4|mov|ogg|webm)(\?.*)?$/i
    }
  }

  config.module.rules.push({ test: /\.svg$/, use: [ 'svg-loader' ] })

  return config
}