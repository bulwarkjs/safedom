const { Ok, Error } = require('folktale/result')

const selectAllNode = (value, node) => {
  const nodes = node.querySelectorAll(value)
  return nodes.length > 0 ? Ok(Array.from(nodes)) : Error(`Selector: '${value}' dont found \nMethod: selectAll`)
}

const selectAll = (value, node) => {
  return node ? selectAllNode(value, node) : selectAllNode(value, document)
}

module.exports = selectAll
