# browser-language

> Detect browser language


## Install

```bash
$ yarn add browser-language
```


## Usage

```js
// without SSR (server-side rendering)
import React from 'react'
import browserLanguage from 'browser-language'

export default () =>
  <h1>{browserLanguage()}</h1>

// with SSR (with server-side rendering)
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


## Why

If you have a website that has `intl` implemented use this library to get user preferred language instead trying to guess the language based on their geolocation. I might be in France but that does't mean I speak french.


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
