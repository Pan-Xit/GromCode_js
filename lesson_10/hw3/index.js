const superRound = (floatNumber, accurancyValue) => {
    const accurancy10 = 10 * accurancyValue;

    return [
        Math.floor(floatNumber * accurancy10) / accurancy10,
        Math.round(floatNumber * accurancy10) / accurancy10,
        Math.ceil(floatNumber * accurancy10) / accurancy10,
        Math.trunc(floatNumber * accurancy10) / accurancy10,
        +floatNumber.toFixed(accurancyValue),
    ]
}