const path = require('path')
const { writeJSON, getProps } = require('./file-reader')

const serve = writeJSON(path.join(__dirname, 'static'))

const postPath = path.join(__dirname, 'pages', 'posts')

serve('posts', { posts: getProps(postPath) })
