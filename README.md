# swatch_time
## A JS library to convert ISO-8601 to [Swatch .beat Internet Time](https://en.wikipedia.org/wiki/Swatch_Internet_Time)
This library is designed to convert from ISO-8601 to Swatch .beat Internet time. Why? I don't know.
# Install
NPM it up!
```
$ npm install --save swatch_time
```
# Usage
This takes an ISO-8601 timestamp string and turns it into a Swatch .beat Internet timestamp.
```js
const getBeatTime = require('swatch_time');

console.log(getBeatTime("1970-01-01T00:00:00Z")); // should output @41.67
console.log(getBeatTime("1970-01-01T00:00:00Z", false)); // should output 41.67
console.log(getBeatTime("1970-01-01T00:00:00Z", false, false, false)); // should output 41
console.log(getBeatTime("1970-01-01T00:00:00Z", false, true, true)); // should output 1970-01-01@41.67
```