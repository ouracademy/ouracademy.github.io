const env = require('./env-config')

module.exports = {
  presets: [['@babel/preset-env', { modules: 'commonjs' }], 'next/babel'],
  plugins: [['transform-define', env]]
}
