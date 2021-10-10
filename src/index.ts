import { fmLong, parse } from "./ms";

function ms(value: string): number;
function ms(value: number): string;
function ms(value: string | number ) {
    if(typeof value === 'number') {
        return fmLong(value);
    } else {
        const array = value.match(/(-?[0-9]+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)/gi) || ['0s'];
        const result = array.reduce((a, b) => 
            (isNaN(a) ? parse(a): a) +
            ((isNaN(a) ? parse(a): a) < 0 ? -parse(b):parse(b))
            , '0s');
        return result;
    }
}

module.exports = ms;