# md-colors
Material design colors as an npm module

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![Build Status](https://circleci.com/gh/orangemug/md-colors.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/md-colors.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/md-colors/dev-status.svg)][dm-dev]

[stability]:   https://github.com/orangemug/stability-badges#unstable
[circleci]:    https://circleci.com/gh/orangemug/md-colors
[dm-prod]:     https://david-dm.org/orangemug/md-colors
[dm-dev]:      https://david-dm.org/orangemug/md-colors#info=devDependencies



## Install
To install

```sh
npm install orangemug/md-colors
```


## Usage
This module can be used in a variety of ways

As a js module

```js
var colors = require("md-colors");
colors("deep-orange", 500);
```

As a sass module

```scss
@import "./node_modules/md-colors"
.button {
  // Either
  background: map-get($md-colors-lime, 500);
  // Or
  background: md-color(lime, 500);
}
```


## License
[MIT](LICENSE)
