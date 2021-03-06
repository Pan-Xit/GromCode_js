export const createArrayOfFunctions = (integerNumber) => {
    if (!integerNumber) {
        return [];
    } else if (typeof integerNumber !== 'number') {
        return null
    }

    let resultArray = [];

    for (let i = 0; i < integerNumber; i++) {
        resultArray[i] = function () {
            return i;
        }
    }

    return resultArray;
}