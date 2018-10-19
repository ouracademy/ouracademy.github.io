const acorn = require('acorn-jsx/inject')(require('acorn'))
const estraverse = require('estraverse')
const toValue = require('esprima-to-value')

module.exports = content => {
  const ast = acorn.parse(content, {
    sourceType: 'module',
    plugins: { jsx: true }
  })

  let reactArrowFunction

  estraverse.traverse(ast, {
    enter: function(node, parent) {
      if (node.type == 'ExportDefaultDeclaration') {
        reactArrowFunction = node.declaration
        this.break()
      }
    }
  })

  
  return reactArrowFunction.body.openingElement.attributes.reduce(
    (ac, node) => {
      const value = node.value
      return {...ac, [node.name.name]: value.hasOwnProperty('value')? value.value : toArray(value.expression) }
    }, {}
  )
}

const toArray = expression => expression.elements.map(node => node.value)