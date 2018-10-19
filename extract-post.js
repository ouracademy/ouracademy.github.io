const acorn = require('acorn-jsx/inject')(require('acorn'))
const estraverse = require('estraverse')
const toValue = require('esprima-to-value');

 module.exports = content => {
    const ast = acorn.parse(content, {
        sourceType: 'module',
        plugins: { jsx: true }
    });
    
    
    let reactArrowFunction
    
    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if (node.type == 'ExportDefaultDeclaration') {
                reactArrowFunction = node.declaration
                this.break()
            }
        }
    });
    
   const postExpression = reactArrowFunction.body.openingElement.attributes.find(node => {
        const identifier = node.name
        return identifier.name === 'post'
    }).value.expression
    
    const author = reactArrowFunction.body.openingElement.attributes.find(node => {
        const identifier = node.name
        return identifier.name === 'author'
    }).value.value
    
    return {...toValue(postExpression), author }
}
