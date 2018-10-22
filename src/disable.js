const select = require('./select')

const disable = query => {
  return select(query)
    .map((el) => {
      el.readonly = true
      el.classList.add('disabled')
      el.setAttribute('readonly', true)
      el.setAttribute('aria-disabled', true)
      return el
    })
    .mapError(() => `Selector: '${query}' dont found \nMethod: disable`)
}

module.exports = disable
