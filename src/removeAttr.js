const select = require('./select')
const { isElementNode } = require('./utils')
const { Ok, Error } = require('folktale/result')
const curry = require('folktale/core/lambda/curry')

const removeAttr = curry(2, (attr, queryOrNode) => {
  if (isElementNode(queryOrNode)) {
    try {
      queryOrNode.removeAttribute(attr)
      return Ok(queryOrNode)
    } catch (e) {
      return Error(`Method: removeAttribute don't found \nNode: ${queryOrNode}\nMethod: removeAttr \nError: ${e}`)
    }
  } else {
    return select(queryOrNode)
      .map((el) => {
        el.removeAttribute(attr)
        return el
      })
      .mapError(() => `Selector: '${queryOrNode}' dont found \nMethod: removeAttr`)
  }
})

export default removeAttr
