import { calc } from './index.js'


it('should return an object with methods that you can use by chain', () => {
    expect(calc(3).add(2).mult(4).div(10).subtract(5).result()).toEqual(-3);
})