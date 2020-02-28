const getSum = (numbersArray) => {
    return numbersArray
        .filter(value => !isNaN(value))
        .reduce((acc, value) => {
            return acc + +value
        }, 0)
}

export const asyncSum = (...asyncNumbers) => Promise.all(asyncNumbers)
    .then(numbersArray => console.log(getSum(numbersArray)))
    .catch(() => Promise.reject(new Error("Can't calculate")))