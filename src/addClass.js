const { isElementNode } = require('./utils')
const { Ok, Error } = require('folktale/result')
const curry = require('folktale/core/lambda/curry')

const addClass = curry(2, (className, node) => {
  if (isElementNode(node)) {
    node.classList.add(className)
    return Ok(node)
  }

  return Error(`\nNode: ${node} is not a valid node \nMethod: addClass`)
})

module.exports = addClass
