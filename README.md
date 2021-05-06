# DeepFind

Deep find recursively looks through an object and extracts matching keys.

## Install

```bash
$ yarn add deepfind
```

## Usage

```javascript
import { deepfind } from 'deepfind';

const object = { 'key', 'value' };
const key = 'key';

deepfind(object, key); // -> ['value']
```

## Tests

```bash
yarn install
yarn test
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2017-2021 Lewis Monteith
