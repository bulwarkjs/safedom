const { Ok, Error } = require('folktale/result')
const { isElementNode } = require('./utils')
const curry = require('folktale/core/lambda/curry')

const getAttr = curry(2, (attr, node) => {
  if (isElementNode(node)) {
    const value = node.getAttribute(attr)
    return value
      ? Ok({ node, value })
      : Error(`Attribute: '${attr}' don't found \nNode: ${node}\nMethod: getAttr`)
  }

  return Error('You should to pass a [DOM Node] \nMethod: getAttr')
})

module.exports = getAttr
