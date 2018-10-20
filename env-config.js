const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

module.exports = {
  // prettier-ignore
  'process.env.API': isProduction? 
    'https://www.our-academy.org/': `http://localhost:${port}`
}
