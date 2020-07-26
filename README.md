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

ms("1 week and 23 days"); //return 2592000000
ms("2592000000", {short: true}); //return 30d
ms("5 days, 4hours and 3 minutes."); //return 446580000
ms("446580000", {short: true}); //return 5d 4h 3m
ms(446580000, {extended: true}); //return 5 days 4 hours 3 minutes
ms(446580000); //return { days: 5, hours: 4, minutes: 3, seconds: 0}
```

#### It supports almost every time units like 
###### For milliseconds:
 milliseconds, msecs, ms etc.
###### For seconds:
seconds, second, secs, sec, s etc.
###### For minutes:
minutes, mins, m etc.
###### For hours:
 hours, hrs, h etc.
###### For days:
days, day, d etc.
###### For weeks:
 weeks, week, w etc.
###### For years:
 years, year, yrs, y etc.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

I would love if you update my README.md file
## License
[MIT](https://choosealicense.com/licenses/mit/)
