const pickBy = require('lodash/fp/pickBy')

module.exports = {
  exportPathMap: async function (defaultPathMap) {

    return pickBy(
        x => { 
            return !x.page.endsWith('.test')
        }
    )(defaultPathMap)
  }
}