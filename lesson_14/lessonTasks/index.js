let message = 'Just learn it!';

export const sendMessage = (name) => {
    const sender = 'GromCode';

    console.log(`${name}, ${message}! Your ${sender}`)
}

export const setMessage = (text) => {
    message = text
}