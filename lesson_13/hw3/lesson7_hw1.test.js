import { squareArray } from '../../lesson_7/hw1/index.js';

const testArray = [1, 2, 4];

it('should return null if function arg not an array', () => {
    const testArg = 'test';

    expect(squareArray(testArg)).toEqual(null);
});

it('should return an array with squared numbers from input array', () => {

    expect(squareArray(testArray)).toEqual([1, 4, 16]);
});

it("shouldn't change an input array", () => {

    squareArray(testArray);

    expect(testArray).toEqual([1, 2, 4]);
});