const { Ok, Error } = require('folktale/result')
const { isElementNode } = require('./utils')
const curry = require('folktale/core/lambda/curry')

const setAttr = curry(2, (attr, node) => {
  if (isElementNode(node)) {
    const value = node.setAttribute(attr)
    return value
      ? Ok({ node, value })
      : Error(`Attribute: '${attr}' don't found \nNode: ${node}\nMethod: setAttr`)
  }

  return Error('You should to pass a [DOM Node] \nMethod: setAttr')
})

module.exports = setAttr