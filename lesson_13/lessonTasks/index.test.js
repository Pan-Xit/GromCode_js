import getSum, { getSquaredArray, getOddNumbers } from './calculator.js'


it('should return array with squared elements', () => {
    const testArray = [1, 2, 3];

    expect(getSquaredArray(testArray)).toEqual([1, 4, 9]);
});

it('should return array with only odd numbers', () => {
    const testArray = [1, 2, 3, 4, 5];

    expect(getOddNumbers(testArray)).toEqual([1, 3, 5]);
});

it('should return sum of two arguments', () => {
    const a = 4,
        b = 5;

    expect(getSum(a, b)).toEqual(9);
});
