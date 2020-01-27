const getSum = (firstNumber, lastNumber) => {
    let result = 0;
    for (let number = firstNumber; number <= lastNumber; number++) {
        if (number % 2 === 0) {
            result += number;
        }
    };
    return result;
}