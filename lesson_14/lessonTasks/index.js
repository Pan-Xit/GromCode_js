export const sendMessage = (name) => {
    const sender = 'GromCode';
    let message = 'Just learn it!';

    return (`${name}, ${message}! Your ${sender}`)
}

export const setMessage = (text) => {
    message = text
}