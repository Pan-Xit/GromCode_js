
let message = 'Just learn it!'

export const sendMessage = (name) => {
    const sender = 'GromCode';

    return (`${name}, ${message}! Your ${sender}`)
}

export const setMessage = (text) => {
    message = text
}