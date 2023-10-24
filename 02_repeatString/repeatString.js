function repeatStringTimes(string, times) {
    if (times < 0)
        return "ERROR"
    else if (times >= 0)
        return string.repeat(times)
    else 
    return "";
}

repeatStringTimes('hey', 3)

// Do not edit below this line
module.exports = repeatStringTimes;
