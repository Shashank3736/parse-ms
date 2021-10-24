import { fmLong, fmShort, parse } from "./ms";

function ms(value: string): number;
function ms(value: number, type: 'short' | 'long'): string;
function ms(value: number | string, type: 'short' | 'long' = 'long') {
    if(typeof value === 'number') {
        if(type === 'short') return fmShort(value);
        else return fmLong(value);
    } else {
        const array = value.match(/(-?[0-9]+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)/gi) || ['0s'];
        const result = array.reduce((a: string | number, b: string) => 
            (isNaN(a) ? parse(a): a) +
            ((isNaN(a) ? parse(a): a) < 0 ? -parse(b):parse(b))
            , '0s');
        return result;
    }
}

module.exports = ms;