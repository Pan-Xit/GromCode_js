import { compareSum } from '../../lesson_5/hw4/index.js';

const lesserPairOfArgs = [1, 2];
const biggerPairOfArgs = [3, 4];

it('should return a warning message if not all the args are numbers', () => {
    const testArgs = [1, 'a', 2, 3]

    expect(compareSum(...testArgs)).toEqual('All the arguments should be numbers')
});

it('should return true if sum of first pair > sum of second pair', () => {
    const testArgs = [...biggerPairOfArgs, ...lesserPairOfArgs];

    expect(compareSum(...testArgs)).toEqual(true);
});

it('should return false if sum of second pair > sum of first pair', () => {
    const testArgs = [...lesserPairOfArgs, ...biggerPairOfArgs];

    expect(compareSum(...testArgs)).toEqual(false);
});

it('should include both numbers (from, to) in calculated sum', () => {
    const testArgs = [18, 20, 1, 10];

    expect(compareSum(...testArgs)).toEqual(true);
});
