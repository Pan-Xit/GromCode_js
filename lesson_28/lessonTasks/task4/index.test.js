import { compose } from './index.js';

it('should return the result of all the given function', () => {
    const testFunc1 = value => value + 2;
    const testFunc2 = value => value * value; 
    const testFunc3 = value => value / 2;

    const testCompose = compose(testFunc1, testFunc2, testFunc3);
    expect(testCompose(2)).toEqual(8)
})