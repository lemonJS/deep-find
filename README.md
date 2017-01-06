# DeepFind
Deep find recursively looks through an object and extracts matching keys.

[![Build Status](https://travis-ci.org/lemonJS/DeepFind.svg)](https://travis-ci.org/lemonJS/DeepFind)

## Install

```bash
$ npm install --save deepfind
```

## Usage

```javascript
const deepfind = require('deepfind');

const OBJ = {'key', 'value'};
const KEY = 'key';

deepfind(OBJ, KEY);
```

## Tests

```bash
npm install
npm test
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Lewis Monteith
