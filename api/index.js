const path = require('path')
const { writeJSON, getProps } = require('./file-reader')

const root = path.join(__dirname, '..')
const serve = writeJSON(path.join(root, 'static'))

const postPath = path.join(root, 'pages', 'posts')

serve('posts', { posts: getProps(postPath) })
