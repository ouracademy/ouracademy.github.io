const pickBy = require('lodash/fp/pickBy')
const getTags = require('./api/get-tags')
const fetch = require('isomorphic-fetch')
const { posts } = require('./api')

module.exports = {
  exportPathMap: async function(defaultPathMap) {
    const tags = getTags(posts)

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
