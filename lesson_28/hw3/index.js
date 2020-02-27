export function sum(positiveNumber) {
    if (positiveNumber < 0) {
        return 'Argument should be a positive number'
    }

    if (positiveNumber === 0) {
        return 0
    }

    return positiveNumber + sum(positiveNumber - 1)
}