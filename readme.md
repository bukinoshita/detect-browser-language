# browser-language

> Detect browser language


## Install

```bash
$ yarn add browser-language
```


## Browser support

- Chrome
- Firefox
- IE
- Edge
- Opera
- Safari


## Usage

```js
// without SSR (server-side rendering) — React example
import React from 'react'
import browserLanguage from 'browser-language'

export default () =>
  <h1>{browserLanguage()}</h1>
```

```js
// with SSR (server-side rendering) — React example
import React, { Component } from 'react'

export default class Page Component {
  componentDidMount() {
    const browserLanguage require('browser-language')
    this.setState({ userLanguage: browserLanguage() })
  }

  render() {
    const { userLanguage } = this.state

    return <h1>{userLanguage}</h1>
  }
}
```

_Works with other libraries as well_


## Why

If you have a website that has `intl` implemented use this library to get user preferred language instead trying to guess the language based on their geolocation. I might be in France but that does't mean I speak/read french.

<img src="/sindres-is-cool.png" alt="" width="550">


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
