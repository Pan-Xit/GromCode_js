import { pickProps } from '../../lesson_8/hw1/index.js';

const testObject = {
    name: 'test',
    age: 22,
    isTest: true,
};

it('should return empty object if there are no relevant property names in array', () => {
    const testArray = ['someName', 'someAge'];

    expect(Object.keys(pickProps(testObject, testArray))).toEqual([]);
});

it("returned object shouldn't include keys from Array which don't present in the object", () => {
    const testArray = ['name', 'age', 'gender'];

    expect(Object.keys(pickProps(testObject, testArray))).toEqual(['name', 'age']);
});

it("input object shouldn't change", () => {
    const testArray = ['name', 'age'];

    pickProps(testObject, testArray);

    const testObjEntries = Object.entries(testObject)

    expect(testObjEntries).toEqual([['name', 'test'], ['age', 22], ['isTest', true]]);
});