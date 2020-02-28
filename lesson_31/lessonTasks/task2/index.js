export const asyncCalculator = (number) => new Promise(resolve => {
        setTimeout(() => {
            console.log(`Initial value: ${number}`);
            resolve(number);
        }, 500)
    })
    .then(value => {
        const result = value * value;
        setTimeout(() => {
            console.log(`Squared value: ${result}`);
        }, 500);

        return result;
    })
    .then(value => {
        const result = value * 2;
        setTimeout(() => {
            console.log(`Doubled value: ${result}`);
        }, 500);

        return result;
    })