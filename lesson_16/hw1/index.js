export const createArrayOfFunctions = (integerNumber) => {
    if (typeof integerNumber !== 'number') {
        return null
    } else if (!integerNumber) {
        return []
    }

    let resultArray = [];

    for (let i = 0; i < integerNumber; i++) {
        resultArray[i] = function () {
            return i;
        }
    }

    return resultArray;
}