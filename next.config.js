const pickBy = require('lodash/fp/pickBy')
const { tags } = require('./api')

module.exports = {
  exportPathMap: async function(defaultPathMap) {
    const tagPages = tags.reduce(
      (pages, tag) =>
        Object.assign({}, pages, {
          [`/tags/${tag}`]: {
            page: '/tags',
            query: { tag }
          }
        }),
      {}
    )

    return Object.assign(
      {},
      pickBy(x => !x.page.endsWith('.test'))(defaultPathMap),
      tagPages
    )
  }
}
