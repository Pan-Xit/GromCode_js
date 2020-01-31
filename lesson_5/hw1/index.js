export const getSum = (startInterval, endInterval) => {
    // Check function arguments
    if (!Number.isInteger(startInterval)) {
        return "First argument should be Integer"
    } else if (!Number.isInteger(endInterval)) {
        return "Second argument should be Integer"
    }

    let sum = 0;

    for (let i = startInterval; i <= endInterval; i++) {
        if (i % 2 === 0) {
            sum += i;
        };
    }

    return sum;
}