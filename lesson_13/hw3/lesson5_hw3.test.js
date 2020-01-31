import { increaser } from '../../lesson_5/hw3/index.js';

const lesserArg = 2;
const biggerArg = 10;

it('should return a warning message if arguments not integer', () => {
    const integerArg = 2;
    const nonIntegerArg = 5.5;

    expect(increaser(nonIntegerArg, integerArg)).toEqual('First argument should be Integer');
    expect(increaser(integerArg, nonIntegerArg)).toEqual('Second argument should be Integer');
});

it('should return sum of arguments if a > index', () => {

    expect(increaser(biggerArg, lesserArg)).toEqual(12);
});

it('should return first arg if a < index', () => {

    expect(increaser(lesserArg, biggerArg)).toEqual(2); 
});