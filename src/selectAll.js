const { Ok, Error } = require('folktale/result')

const selectAll = (value, node) => {
  const selectAll = (value, node) => {
    const a = node.querySelectorAll(value)
    return a ? Ok(Array.from(a)) : Error(`Selector: '${value}' dont found \nMethod: selectAll`)
  }

  return node ? selectAll(value, node) : selectAll(value, document)
}

module.exports = selectAll
