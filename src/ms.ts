const s = 1000;
const m = 60*s;
const h = 60*m;
const d = 24*h;
const w = 7*d;
const y = 365.25*d;

export function parse(text: string, debug: Boolean = false): number | undefined {
    if(text.length > 100) return 0;
    const match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(text);
    if(!match) return undefined;
    if(debug) console.log(match);
    const n = parseFloat(match[1]);
    const type = (match[2] || 'ms').toLowerCase();

    switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y;
        case 'weeks':
        case 'week':
        case 'w':
          return n * w;
        case 'days':
        case 'day':
        case 'd':
          return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n;
        default:
          return undefined;
    }
}

export function fmShort(milliseconds: number): string {
    const msAbs = Math.abs(milliseconds);
    let time: string = '';
    if(msAbs > d) {
        let days = Math.round( milliseconds/d );
        time += `${days}d `
        milliseconds -= days*d;
    }
    if(msAbs > h) {
        let hours = Math.round( milliseconds/h );
        if(hours) time += `${hours}h `;
        milliseconds -= hours*h;
    }
    if(msAbs > m) {
        let minutes = Math.round( milliseconds/m );
        if(minutes) time += `${minutes}m `;
        milliseconds -= minutes*m;
    }
    if(msAbs > s) {
        let seconds = Math.round( milliseconds/s );
        if(seconds) time += `${seconds}s`
    }
    return time;
}

export function fmLong(milliseconds: number): string {
    const msAbs = Math.abs(milliseconds);
    let time: string = '';
    if(msAbs > d) {
        let days = Math.floor( milliseconds/d );
        time += days > 1 ? `${days} days `: `${days} day`;
        milliseconds -= days*d;
    }
    if(msAbs > h) {
        let hours = Math.floor( milliseconds/h );
        if(hours) time += hours > 1 ? `${hours} hours `: `${hours} hour`;
        milliseconds -= hours*h;
    }
    if(msAbs > m) {
        let minutes = Math.floor( milliseconds/m );
        if(minutes) time += minutes > 1 ? `${minutes} minutes `: `${minutes} minute`;
        milliseconds -= minutes*m;
    }
    if(msAbs > s) {
        let seconds = Math.floor( milliseconds/s );
        if(seconds) time += seconds > 1 ? `${seconds} seconds `: `${seconds} second`;
    }
    return time;
}
