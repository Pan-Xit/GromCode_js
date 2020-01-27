const findDivCount = (a, b, n) => {
    let amountOfNumbers = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            amountOfNumbers += 1
        }
    }
    return amountOfNumbers
}