import { sum } from './index.js';


it('should return alert if argument is a negative number', () => {
    expect(sum(-1)).toEqual('Argument should be a positive number')
})

it('should return a max fibonaci number which less then or equal to the given argument', () => {
    expect(sum(4)).toEqual(10)
})