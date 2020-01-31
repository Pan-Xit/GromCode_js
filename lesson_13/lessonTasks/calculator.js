export const getSquaredArray = numbersArray =>
    numbersArray.map(element => element * element);

export const getOddNumbers = numbersArray =>
    numbersArray.filter(element => element % 2 !== 0);

export default (a, b) => a + b;