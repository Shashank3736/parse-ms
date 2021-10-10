"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ms_1 = require("./ms");
function ms(value) {
    if (typeof value === 'number') {
        return (0, ms_1.fmLong)(value);
    }
    else {
        const array = value.match(/(-?[0-9]+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)/gi) || ['0s'];
        const result = array.reduce((a, b) => (isNaN(a) ? (0, ms_1.parse)(a) : a) +
            ((isNaN(a) ? (0, ms_1.parse)(a) : a) < 0 ? -(0, ms_1.parse)(b) : (0, ms_1.parse)(b)), '0s');
        return result;
    }
}
module.exports = ms;
