const k = 1000
const m = 1000*k
const b = 1000*m
const t = 1000*b
const g = 1000*t

module.exports = (val) => {
    if(!isNaN(val)) return parseFloat(val);
    const kiloMatch = /(-?[0-9.]+) *(kilos?|kilo?|k)/gi
    const milMatch = /(-?[0-9.]+) *(millions?|million?|mil?|m)/gi
    const bilMatch = /(-?[0-9.]+) *(billions?|billion?|bil?|b)/gi
    const triMatch = /(-?[0-9.]+) *(trillions?|trillion?|t)/gi
    const gilMatch = /(-?[0-9.]+) *(gillions?|gillion?|gil?|g)/gi
    const int = parseFloat(val.replace(/[^-0-9.]+/gi, ''))
    if(kiloMatch.exec(val)) {
        return int*k
    } if(milMatch.exec(val)) {
        return int*m
    }
    if(bilMatch.exec(val)) {
        return int*b
    }
    if(triMatch.exec(val)) {
        return int*t
    }
    if(gilMatch.exec(val)) {
        return int*g
    }

}