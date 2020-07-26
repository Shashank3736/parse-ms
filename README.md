# parse-ms

Parse ms is a Node js library to convert human-readable format into milliseconds and viceversa.

## Installation

Use the package manager **npm** to install parse-ms.
Type `npm install @shreyash21/ms`

```bash
npm install @shreyash21/ms
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

I would love if you update my README.md file
## License
[MIT](https://choosealicense.com/licenses/mit/)
