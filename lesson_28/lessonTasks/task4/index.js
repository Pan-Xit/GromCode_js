export const compose = (...funcs) => (arg) => {
    return funcs.reduce((acc, func) => {
        return func(acc)
    }, arg)
}