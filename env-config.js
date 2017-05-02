const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'BACKEND_URL': prod ? 'https://ouracademy.herokuapp.com/api' : 'http://localhost:3000/api'
}