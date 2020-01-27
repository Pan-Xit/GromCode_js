const sum = (from, to) => {
    let result = 0;
    for (let i = from; i <= to; i++) {
        result += i;
    }
    return result
}

const compareSums = (a, b, c, d) => {
    const firstSum = sum(a, b);
    const secondSum = sum(c, d);

    return firstSum > secondSum;
}