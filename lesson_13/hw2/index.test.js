import { calc } from './calculator.js';

it('should return null if argument not a string', () => {
    const testArg = 1;

    expect(calc(testArg)).toEqual(null);
});

it('should return sum of operands if arg has a + symbol', () => {
    const testString = '5 + 4';

    expect(calc(testString)).toEqual('5 + 4 = 9');
});

it('should return difference between the operands if arg has a - symbol', () => {
    const testString = '5 - 4';

    expect(calc(testString)).toEqual('5 - 4 = 1');
});

it('should multiply the operands if arg has a * symbol', () => {
    const testString = '5 * 4';

    expect(calc(testString)).toEqual('5 * 4 = 20');
});

it('should devide the operands if arg has a / symbol', () => {
    const testString = '5 / 4';

    expect(calc(testString)).toEqual('5 / 4 = 1.25');
});