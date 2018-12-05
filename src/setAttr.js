const { Ok, Error } = require('folktale/result')
const { isElementNode } = require('./utils')
const curry = require('folktale/core/lambda/curry')

const setAttr = curry(3, (attr, value, node) => {
  if (isElementNode(node)) {
    node.setAttribute(attr, value)
    return Ok(node)
  }

  return Error('You should to pass a [DOM Node] \nMethod: setAttr')
})

module.exports = setAttr
