export const bind = (func, context) => {
    return function() {
        return func.call(context, ...arguments)
    }
}