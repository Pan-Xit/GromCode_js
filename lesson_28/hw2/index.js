function fibonacci(n) {
    if (n < 2) {
        return n
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}


export function maxFibonacci(positiveNum) {
    if (positiveNum < 0) {
        return 'Argument should be a positive number'
    }

    let result;

    for (let n = 0; ; n++) {
        if (fibonacci(n) > positiveNum) {
            break
        }

        result = fibonacci(n)
    }

    return result
}