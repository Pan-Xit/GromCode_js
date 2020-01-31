import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should return null when get empty array as an argument', () => {
    const testArray = [];

    expect(getMinSquaredNumber(testArray)).toEqual(null)
});

it('should return null when get string as an argument', () => {
    const testVariable = 'test';

    expect(getMinSquaredNumber(testVariable)).toEqual(null)
});

it('should return a square of min number module', () => {
    const testArray = [-777, 3, -2, 6, 45, -20];

    expect(getMinSquaredNumber(testArray)).toEqual(4);
});