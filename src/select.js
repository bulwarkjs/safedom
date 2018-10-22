const { Ok, Error } = require('folktale/result')

const select = (value, node) => {
  const select = (value, node) => {
    const a = node.querySelector(value)
    return a ? Ok(a) : Error(`Selector: '${value}' dont found \nMethod: select`)
  }

  return node ? select(value, node) : select(value, document)
}

module.exports = select
