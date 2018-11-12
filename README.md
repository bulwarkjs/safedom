# safedom

safedom is a safe way to you manipulate dom using a purer functional style.

**Table of Contents**

- [Installation](#installation)
- [Why safedom ?](#why-safedom-)
- [Overview](#overview)
  - [A wonderful error messages](#a-wonderful-error-messages)
- [Documentation](#documentation)
  - [select](#select)
  - [selectAll](#selectall)
  - [getAttr](#getattr)
  - [disable](#disable)
  - [enable](#enable)
  - [on](#on)
  - [removeAttr](#removeAttr)
  - [removeAttrByQuery](#removeAttrByQuery)
- [License](#license)

## Installation

`safedom` is available from `npm`.

```
$ npm install safedom -S
```

## Why safedom ?


In many applications most of the errors are still related to DOM manipulations,
and as we are dealing with side effects, we need to have null checks, but safedom lets you do this safely.
All safe functions are automatically curried and emphasizes a purer functional style.

## Overview

```javascript
//<div id="app" data-value="10">hello world</div>
const safedom = require('safedom')
const value = safedom.select('#app')
  .chain(safedom.getAttr('data-value'))
  .map(eff => eff.value)
  .map(parseInt)
  .map(value => value + 100)
  .getOrElse(0)

console.log(value) // 110
```

### A wonderful error messages

It's good to know where it's not working, for example

1. Select by Id but is not found in DOM

```javascript
//<div id="dragon" data-value="10">hello world</div>
const safedom = require('safedom')

safedom.select('#apslkajdp')
  .chain(safedom.getAttr('data-value'))
  .map(eff => eff.value)
  .map(parseInt)
  .map(value => value + 100)
  .matchWith({
    Ok: ({ value }) => value,

    Error: ({ value: error }) => {
      console.log(error)
      /*
        Selector: '#apslkajdp' dont found
        Method: select
      */
    }
  })

```

2. Get an attribute from a element but dont have

```javascript
//<div id="dragon">hello world</div>
const safedom = require('safedom')

const value = safedom.select('#dragon')
  .chain(safedom.getAttr('data-value'))
  .map(eff => eff.value)
  .map(parseInt)
  .matchWith({
    Ok: ({ value }) => value,

    Error: ({ value: error }) => {
      console.log(error)
      /*
        Attribute: 'data-value' don't found
        Node: [object HTMLDivElement]
        Method: getAttr
      */
    }
  })

```

## Documentation

### select

Similiar to a document.querySelector but returns a Result monad from [folktale](https://folktale.origamitower.com/api/v2.3.0/en/folktale.result.html).

You can use methods available to manipulate value.

```javascript
//<div id="dragon">hello world</div>
const safedom = require('safedom')

const value = safedom.select('#dragon')
console.log(value) //InternalConstructor {value: div#app}
```

To you get value in safe way, you should map value.

```javascript
//<div id="dragon">hello world</div>
const safedom = require('safedom')

const value = safedom.select('#dragon')
  .map(element => element.textContent)
  .map(console.log)

console.log(value) //hello world
```

You can have a default value for when you can't find.

```javascript
//<div id="dragon">hello world</div>
const safedom = require('safedom')

const value = safedom.select('#lion')
  .map(element => element.textContent)
  .getOrElse('Victor')

console.log(value) //Victor
```

### selectAll

Similiar to an document.querySelectorAll but returns a Result monad from [folktale](https://folktale.origamitower.com/api/v2.3.0/en/folktale.result.html).
**But querySelectorAll returns a NodeList and safedom, a Array.**


You can use methods available to manipulate value.

```javascript
//<div id="dragon">hello world</div>
const safedom = require('safedom')

const value = safedom.selectAll('#dragon')
console.log(value)//InternalConstructor [{value: div#app}]
```

### getAttr

Similiar to a node.getAttribute but returns a Result monad from [folktale](https://folktale.origamitower.com/api/v2.3.0/en/folktale.result.html).

```javascript
//<div id="app" data-value="10">hello world</div>
const safedom = require('safedom')
const value = safedom.select('#app')
  .chain(safedom.getAttr('data-value')) //should use chain because getAttr returns a Result
  .map(eff => eff.value)
  .map(parseInt)
  .map(value => value + 100)
  .getOrElse(0)

console.log(value) // 110
```

### disable
You can disable specific element

```javascript
//<div id="app">hello world</div>
const safedom = require('safedom')
const value = safedom.disable('#app')

console.log(value)// InternalConstructor {value: div#app.disabled}
```

```javascript
//<div id="app">hello world</div>
const safedom = require('safedom')
const value = safedom.disable('#app')
  .map((el) => {
    console.log(e)
    //<div id="app" class="disabled" readonly="true" aria-disabled="true"> Victor </div>
    return el
  })

```

### enable
Just enable specific element

```javascript
//<div id="app" class="disabled" readonly="true" aria-disabled="true"> Victor </div>
const safedom = require('safedom')
const value = safedom.enable('#app')

console.log(value)// InternalConstructor {value: div#app}
```

```javascript
//<div id="app" class="disabled" readonly="true" aria-disabled="true"> Victor </div>
const safedom = require('safedom')
const value = safedom.enable('#app')
  .map((el) => {
    console.log(e)
    //<div id="app">hello world</div>
    return el
  })

```

### on

Handle DOM-events

```javascript
const handleClick = () => console.log('clicked')
safedom.on('click', document, handleClick)
```

```javascript
const handleClick = () => console.log('clicked')
safedom.select('#app')
 .map(safedom.on('click'))
 .map(clickStream => clickStream(handleClick))
```

### removeAttr

Remove attribute from a node element

```javascript
// <div data-id="div-with-attribute" random="attribute"></div>

safedom.select('[data-id="div-with-attribute"]')
    .map(safedom.removeAttr('random'))

// <div data-id="div-with-attribute"></div>

or

// <div data-id="multiple-divs" random="attribute"></div>
// <div data-id="multiple-divs" random="attribute"></div>

safedom.selectAll('[data-id="multiple-divs"]')
    .map(nodes => nodes.forEach(safedom.removeAttr('random')))

// <div data-id="multiple-divs"></div>
// <div data-id="multiple-divs"></div>
```

### removeAttrByQuery
Remove attribute from a node element using query.
Note: this function does not use **selectAll**, so it will only remove the attribute from the first element found in DOM
```javascript
// <div data-id="div-with-attribute" random="attribute"></div>

safedom.removeAttrByQuery('random', '[data-id="div-with-attribute"]')

// <div data-id="div-with-attribute"></div>

```


License
-------

The code is available under the [MIT License](LICENSE.md).
