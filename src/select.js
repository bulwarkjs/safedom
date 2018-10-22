const { Ok, Error } = require('folktale/result')

const select = (value, node) => {
  const selectNode = (value, node) => {
    const a = node.querySelector(value)
    return a ? Ok(a) : Error(`Selector: '${value}' dont found \nMethod: select`)
  }

  return node ? selectNode(value, node) : selectNode(value, document)
}

module.exports = select
