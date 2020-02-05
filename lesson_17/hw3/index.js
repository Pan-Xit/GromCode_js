export const bind = (func, context, ...args) => {
    return function() {
        console.log(arguments)
        return func.call(context, ...args, ...arguments)
    }
}