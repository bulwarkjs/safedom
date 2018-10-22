const { Ok, Error } = require('folktale/result')

const selectNode = (query, node) => {
  const el = node.querySelector(query)
  return el ? Ok(el) : Error(`Selector: '${query}' dont found \nMethod: select`)
}

const select = (query, node) => {
  return node ? selectNode(query, node) : selectNode(query, document)
}

module.exports = select
