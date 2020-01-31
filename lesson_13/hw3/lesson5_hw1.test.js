import { getSum } from '../../lesson_5/hw1/index.js';

const lesserArg = 2;
const biggerArg = 10;

it('should return a warning message if arguments not integer', () => {
    const integerArg = 2;
    const nonIntegerArg = 5.5;

    expect(getSum(nonIntegerArg, integerArg)).toEqual('First argument should be Integer');
    expect(getSum(integerArg, nonIntegerArg)).toEqual('Second argument should be Integer');

});

it('should return sum of even numbers only', () => {

    expect(getSum(lesserArg, biggerArg)).toEqual(30);
});

it('should return 0 if first arg > second arg', () => {

    expect(getSum(biggerArg, lesserArg)).toEqual(0); 
});