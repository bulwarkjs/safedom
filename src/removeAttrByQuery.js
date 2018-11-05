const select = require('./select')
const curry = require('folktale/core/lambda/curry')

const removeAttrByQuery = curry(2, (attr, query) => {
  return select(query)
    .map((el) => {
      el.removeAttribute(attr)
      return el
    })
    .mapError(() => `Selector: '${query}' not found \nMethod: removeAttrByQuery`)
})

module.exports = removeAttrByQuery
