export const findDivCount = (a, b, n) => {
    if ([a, b, n].filter(element => !Number.isInteger(element)).length !== 0) {
        return 'All arguments should be integer'
    }

    let result = 0;

    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            result += 1;
        }
    }

    return result
}