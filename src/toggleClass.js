const { isElementNode } = require('./utils')
const { Ok, Error } = require('folktale/result')
const curry = require('folktale/core/lambda/curry')

const toggleClass = curry(2, (className, node) => {
  if (isElementNode(node)) {
    node.classList.toggle(className)
    return Ok(node)
  }

  return Error(`\nNode: ${node} is not a valid node \nMethod: toggleClass`)
})

module.exports = toggleClass
