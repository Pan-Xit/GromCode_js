import { makeCounter } from './index.js'


it('should return increment each time it called', () => {
    let testCounter_1 = makeCounter();

    expect(testCounter_1()).toEqual(0);
    expect(testCounter_1()).toEqual(1);
});

it('should allow to create independent counters', () => {
    let testCounter_1 = makeCounter();
    let testCounter_2 = makeCounter();

    expect(testCounter_1()).toEqual(0);
    expect(testCounter_2()).toEqual(0);
});