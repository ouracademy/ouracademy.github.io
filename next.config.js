module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to config
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
}