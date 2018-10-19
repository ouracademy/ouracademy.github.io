const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

module.exports = {
  'process.env.API_POSTS': `${
    isProduction ? 'https://www.academyfor.us' : `http://localhost:${port}`
  }/static/posts.json`
}
