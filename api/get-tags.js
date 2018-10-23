const union = require('lodash/fp/union')

const getTags = posts =>
  posts
    .map(post => post.tags)
    .reduce(union, [])
    .sort()

module.exports = getTags
