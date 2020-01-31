import { findDivCount } from '../../lesson_5/hw5/index.js';

const lesserArg = 1;
const biggerArg = 10;
const step = 3;

it('should return a warning message if not all the args are integers', () => {

    expect(findDivCount(1, 3, 'a')).toEqual('All arguments should be integer');
});

it('should return number of elements aliquoted to last arg', () => {

    expect(findDivCount(lesserArg, biggerArg, step)).toEqual(3);
});

it('should return 0 if second argument > first argument', () => {
    const testArgs = [10, 1, 3];

    expect(findDivCount(biggerArg, lesserArg, step)).toEqual(0)
})