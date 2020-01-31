import { reverseArray } from '../../lesson_7/hw2/index.js';

const testArray = [1, 2, 4];

it('should return null if function arg not an array', () => {
    const testArg = 'test';

    expect(reverseArray(testArg)).toEqual(null);
});

it('should return a reverse array', () => {

    expect(reverseArray(testArray)).toEqual([4, 2, 1]);
});

it("shouldn't change an input array", () => {
    reverseArray(testArray);

    expect(testArray).toEqual([1, 2, 4]);
});