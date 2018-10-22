const select = require('./select')

const enable = query => {
  return select(query)
    .map((el) => {
      el.classList.remove('disabled')
      el.removeAttribute('readonly')
      el.removeAttribute('aria-disabled')
      return el
    })
    .mapError(() => `Selector: '${query}' dont found \nMethod: enable`)
}

module.exports = enable
