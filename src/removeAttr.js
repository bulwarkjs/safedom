const { isElementNode } = require('./utils')
const { Ok, Error } = require('folktale/result')
const curry = require('folktale/core/lambda/curry')

const removeAttr = curry(2, (attr, node) => {
  if (isElementNode(node)) {
    node.removeAttribute(attr)
    return Ok(node)
  }
  return Error(`\nNode: ${node} is not a valid node \nMethod: removeAttr`)
})

export default removeAttr
