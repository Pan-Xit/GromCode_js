export const bind = (func, context, ...args) => {
    return function(...args) {
        return func.call(context, ...arguments)
    }
}