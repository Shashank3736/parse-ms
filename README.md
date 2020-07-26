# parse-ms

Parse ms is a Node js library to convert human-readable format into milliseconds and viceversa.

## Installation

Use the package manager [**npm**](https://pip.pypa.io/en/stable/) to install parse-ms.
Type `npm install ShreyashKira/parse-ms#master`


Note: Currently this repo do not have any npm library so you must install git in order to install this repo


```bash
npm install ShreyashKira/parse-ms
```

## Usage

```javascript
const ms = require('parse-ms');

console.log(ms("1 week and 23 days")); //return 2592000000
console.log(ms("2592000000")); //return 30d
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
