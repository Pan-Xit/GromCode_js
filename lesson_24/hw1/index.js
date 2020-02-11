export const getDiff = (startDate, endDate) => {
    const dateToUTCTimestamp = (date) => {
        const offset = date.getTimezoneOffset()
        return date.getTime() - offset * 6e4
    }

    let diff = dateToUTCTimestamp(endDate) - dateToUTCTimestamp(startDate);
    if (diff < 0) {
        diff = -diff
    }

    const time = {
        day: 1e3 * 60 * 60 * 24,
        hour: 1e3 * 60 * 60,
        min: 1e3 * 60,
        sec: 1e3,
        // ms: 1,
    };
    
    const timeDiff = {};

    Object.entries(time).reduce((acc, [time, value]) => {
        Object.assign(timeDiff, {[time]: Math.trunc(acc / value)});
        return acc % value;
    }, diff);

    return `${timeDiff.day}d ${timeDiff.hour}h ${timeDiff.min}m ${timeDiff.sec}s`

}

// const date1 = new Date(0);
// const date2 = new Date();

// console.log(getDiff(date2, date1))