const env = require('./env-config')

module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [['transform-define', env]]
    },
    production: {
      presets: ['next/babel'],
      plugins: [['transform-define', env]]
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
      plugins: [['transform-define', env]]
    }
  }
}
