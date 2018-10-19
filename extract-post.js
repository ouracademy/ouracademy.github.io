const acorn = require('acorn-jsx/inject')(require('acorn'))
const estraverse = require('estraverse')
const toValue = require('esprima-to-value')

module.exports = content => {
  const sep = { sourceType: 'module', plugins: { jsx: true } }
  const ast = acorn.parse(content, sep)

  let reactArrowFunction
  const traverseObj = {
    enter: function(node, parent) {
      if (node.type == 'ExportDefaultDeclaration') {
        reactArrowFunction = node.declaration
        this.break()
      }
    }
  }
  estraverse.traverse(ast, traverseObj)

  return reactArrowFunction.body.openingElement.attributes.reduce(
    (ac, node) => {
      const { value } = node

      const fvalue = value.hasOwnProperty('value')
        ? value.value
        : toArray(value.expression)
      return {
        ...ac,
        [node.name.name]: fvalue
      }
    },
    {}
  )
}

const toArray = expression => expression.elements.map(node => node.value)