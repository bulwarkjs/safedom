const { isElementNode } = require('./utils')
const { Ok, Error } = require('folktale/result')

const focus = (node) => {
  if (isElementNode(node)) {
    node.focus()
    return Ok(node)
  }

  return Error(`\nNode: ${node} is not a valid node \nMethod: focus`)
}

module.exports = focus
