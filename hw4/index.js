const checker = (arr) => {
    let minElement = Infinity;
    let maxElement = -Infinity;

    for (let element of arr) {
        if (element > maxElement) {
            maxElement = element;
        }
        if (element < minElement) {
            minElement = element;
        }
    }

    return minElement + maxElement > 1000
}