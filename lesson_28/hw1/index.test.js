import { shmoment } from './index.js';

const testInputDate = new Date(2020, 0, 7, 17, 17, 17);

it('should not modifide the input date', () => {
    const testInputTime = testInputDate.getTime()
    shmoment(testInputDate).add('minutes', 2).add('days', 8)
    expect(testInputDate.getTime()).toEqual(testInputTime)
})

it('should allow to modifide date by chain of methods', () => {
    expect(shmoment(testInputDate)
        .add('minutes', 2)
        .add('days', 8)
        .subtract('years', 1)
        .result()
        .getTime()).toEqual(new Date(2019, 0, 15, 17, 19, 17).getTime())
})

it('should not allow to use unknown params in its methods', () => {
    expect(shmoment(testInputDate).add('test', 3)).toEqual('test is not allowed')
})