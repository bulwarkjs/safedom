const { Ok, Error } = require('folktale/result')

const selectNode = (query, node) => {
  try {
    const el = node.querySelector(query)
    return el ? Ok(el) : Error(`Selector: '${query}' dont found \nMethod: select`)
  } catch (e){
    return Error(e)
  }
}

const select = (query, node) => {
  return node ? selectNode(query, node) : selectNode(query, document)
}

module.exports = select
