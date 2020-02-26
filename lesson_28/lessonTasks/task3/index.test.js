import { mult, twice, triple } from './index.js'

it('should return multiplication of two arguments given separately', () => {
    expect(mult(4)(5)).toEqual(20);
})

it('should double an argument', () => {
    expect(twice(4)).toEqual(8);
})

it('should triple an argument', () => {
    expect(triple(6)).toEqual(18);
})