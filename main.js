const ms = require('./index');

module.exports = (val, options = {}) => {
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
      /[0-9]+ *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)/gi
    );
    const result = array.reduce((a, b) => (isNaN(a) ? ms(a) : a) + ms(b), '0s');
    return result;
  }
};
