const curry = require('folktale/core/lambda/curry')

const on = curry(3, (type, element, f) => {
  element.addEventListener(type, f, true)
  return () => element.removeEventListener(type, f, true)
})

module.exports = on
