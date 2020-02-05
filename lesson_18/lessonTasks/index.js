export function sumOfSquares() {
    return [...arguments].reduce((acc, element) => {
        return acc + element * element
    }, 0)
}