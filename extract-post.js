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
    (ac, node) => ({...ac, [node.name.name]: node.value.value }), {}
  )
}
