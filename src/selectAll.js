const { Ok, Error } = require('folktale/result')

const selectAll = (value, node) => {
  const selectAllNode = (value, node) => {
    const a = node.querySelectorAll(value)
    return a ? Ok(Array.from(a)) : Error(`Selector: '${value}' dont found \nMethod: selectAll`)
  }

  return node ? selectAllNode(value, node) : selectAllNode(value, document)
}

module.exports = selectAll
