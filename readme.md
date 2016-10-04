# rugga-pad

## Install
```
$ npm install --save rugga-pad
```

## Usage

```js
const ruggaPad = require('rugga-pad');

ruggaPad('ball', 6);
//=> '🏉🏉ball'
```

## API

### ruggaPad(input, length)

Pads `input` with rugby balls on the left side if it's shorter than `length`. Padding rugby balls are truncated if they exceed `length`.

#### input
Type: `string`

String to pad.

#### length
Type: `number`<br>
Default: `0`

Padding length.

## License
Created with ♥ by [Tiaan du Plessis](https://github.com/mightyCrow). Licensed under the MIT License.
