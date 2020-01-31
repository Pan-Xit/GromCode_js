import { getAdults } from '../../lesson_8/hw2/index.js';

const testObject = {
    'Bob': 17,
    'Tom': 19,
    'Sam': 18,
};

it('should return object with only values >= 18', () => {
    const resultObjValues = Object.values(getAdults(testObject));

    expect(resultObjValues).toEqual([19, 18]);
});

it('should return empty object if inpur arg is empty object', () => {

    expect(getAdults({})).toEqual({});
});

it("shouldn't change input object", () => {

    getAdults(testObject);

    const testObjectEntries = Object.entries(testObject);

    expect(testObjectEntries).toEqual([['Bob', 17], ['Tom', 19], ['Sam', 18]])
});