const ms = require('./index');
const conv = require('./converter');

module.exports = (val, options = {}) => {
  if(options.type && options.type === 'num') {
    const match = /(-?[0-9.]+) *(kilos?|kilo?|k|millions?|million?|mil?|m|billions?|billion?|bil?|b|trillions?|trillion?|t|gillions?|gillion?|gil?|g)/gi
    const array = val.match(match)
    if(!array) return;
    const result = array.reduce((a, b) =>
    (isNaN(a) ? conv(a): a) +
    ((isNaN(a) ? conv(a): a) < 0 ? -conv(b):conv(b))
    , 0)
    return result;
  }
  if (!isNaN(val)) {
    val = parseInt(val)
    let roundTowardsZero = val > 0 ? Math.floor : Math.ceil;
    let days = roundTowardsZero(val/86400000),
    hours = roundTowardsZero(val / 3600000) % 24,
    minutes = roundTowardsZero(val / 60000) % 60,
    seconds = roundTowardsZero(val / 1000) % 60;
    let isDay = days !== 0,
        isHour = hours !== 0,
        isMinute = minutes !== 0,
        isSecond = seconds !== 0;
    let timeValue = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
    if(options.extended || options.long) {
      return (!isDay?'': timeValue.days + (timeValue.days > 1?' days ': ' day ' )) + 
      (!isHour?'': timeValue.hours + (timeValue.hours > 1? " hours ": ' hour ')) +
      (!isMinute?"": timeValue.minutes + (timeValue.minutes > 1? " minutes ": " minute ")) +
      (!isSecond?"": timeValue.seconds + (timeValue.seconds > 1? " seconds": " second"));
    }
    else if(options.short) {
      return (!isDay?'': timeValue.days + "d ") + 
      (!isHour?'': timeValue.hours + 'h ') +
      (!isMinute?"": timeValue.minutes + 'm ') +
      (!isSecond?"": timeValue.seconds + 's');
    }
    return timeValue;
  } else {
    const array = val.match(
      /(-?[0-9]+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)/gi
    );
    const result = array.reduce((a, b,) => 
    (isNaN(a) ? ms(a): a) +
    ((isNaN(a) ? ms(a): a) < 0 ? -ms(b):ms(b))
    , '0s');
    return result;
  }
};
