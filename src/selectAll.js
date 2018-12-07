const { Ok, Error } = require('folktale/result')

const selectAllNode = (value, node) => {
  try {
    const nodes = node.querySelectorAll(value)
    return nodes.length > 0 ? Ok(Array.from(nodes)) : Error(`Selector: '${value}' dont found \nMethod: selectAll`)
  } catch(e){
    return Error(e)
  }
}

const selectAll = (value, node) => {
  return node ? selectAllNode(value, node) : selectAllNode(value, document)
}

module.exports = selectAll
