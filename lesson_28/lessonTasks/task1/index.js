export function calc(num) {
    let result = num

    return {
        add(num) {
            result += num;
            return this
        },

        subtract(num) {
            result -= num;
            return this
        },

        mult(num) {
            result *= num;
            return this
        },

        div(num) {
            result /= num;
            return this
        },

        result() {
            return result
        }
    }
}