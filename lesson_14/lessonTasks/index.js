
let message = 'Just learn it!'

const sendMessage = (name) => {
    const sender = 'GromCode';

    return (`${name}, ${message}! Your ${sender}`)
}

const setMessage = (text) => {
    message = text
}