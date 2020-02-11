export const getDiff = (startDate, endDate) => {
    const diff = endDate.getTime() - startDate.getTime()
    const time = {
        day: 1000 * 60 * 60 * 24,
        hour: 1000 * 60 * 60,
        min: 1000 * 60,
        sec: 1000,
        // ms: 1,
    }
    
    const timeDiff = {};

    Object.entries(time).reduce((acc, [time, value]) => {
        Object.assign(timeDiff, {[time]: Math.trunc(acc / value)});
        return acc % value;
    }, diff)

    return `${timeDiff.day}d ${timeDiff.hour}h ${timeDiff.min}m ${timeDiff.sec}s`
}