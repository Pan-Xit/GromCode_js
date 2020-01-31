const sum = (from, to) => {
    let resultSum = 0;
    
    for (let i = from; i <= to; i++) {
        resultSum += i;
    }

    return resultSum
}

export const compareSum = (a, b, c, d) => {
    // Check if all the arguments are numbers
    if ([a, b, c, d].filter(element => typeof element !== 'number').length !== 0) {
        return 'All the arguments should be numbers'
    };

    return sum(a, b) > sum(c, d)
}