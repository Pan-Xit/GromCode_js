export const increaser = (a, index) => {
    if (!Number.isInteger(a)) {
        return 'First argument should be Integer'
    } else if (!Number.isInteger(index)) {
        return 'Second argument should be Integer'
    }

    return a > index ? a + index : a
}