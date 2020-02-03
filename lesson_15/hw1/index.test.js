import { createCalculator } from './index.js';


it('should return object with methods: add, decrease, reset, getMemo', () => {
    const testCalc = createCalculator();

    expect(Object.keys(testCalc)).toEqual(['add', 'decrease', 'reset', 'getMemo']);
});

it('should return result with method "getMemo"', () => {
    const testCalc = createCalculator();

    expect(testCalc.getMemo()).toEqual(0);
});

it('should increase result with using "add" method and remember the result', () => {
    const testCalc = createCalculator();

    testCalc.add(5);
    expect(testCalc.getMemo()).toEqual(5);
});

it('should decrease result with using "decrease" method and remember the result', () => {
    const testCalc = createCalculator();

    testCalc.decrease(5);
    expect(testCalc.getMemo()).toEqual(-5);
});

it('should return 0 value to result with using "reset" method and remember the result', () => {
    const testCalc = createCalculator();

    testCalc.add(5);
    expect(testCalc.getMemo()).toEqual(5);

    testCalc.reset();
    expect(testCalc.getMemo()).toEqual(0);
});