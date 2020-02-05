export const wallet = {
    transactions: [1, 2, 11, 42],
    getMax() {
        return Math.max(...this.transactions)
    },
    getMin() {
        return Math.min(...this.transactions)
    },
}