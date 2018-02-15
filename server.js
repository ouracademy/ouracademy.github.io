const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const writePosts = require('./file-reader')
writePosts()

app.prepare().then(() => {
  const server = express()

  server.get('/posts/:slug', (req, res) => {
      const actualPage = `/posts/${req.params.slug}`
      //const queryParams = { slug: req.params.slug }
      app.render(req, res, actualPage)//, queryParams)
  })
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})