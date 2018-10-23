const path = require('path')
const { writeJSON, getProps } = require('./file-reader')
const getTags = require('./get-tags')

const root = path.join(__dirname, '..')
const serve = writeJSON(path.join(root, 'static'))

const posts = getProps(path.join(root, 'pages', 'posts'))
const tags = getTags(posts)

module.exports = { posts, tags }

serve('posts', { posts })
serve('tags', { tags })
