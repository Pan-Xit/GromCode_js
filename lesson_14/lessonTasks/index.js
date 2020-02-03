export default function createMessenger() {
    let message = 'Just learn it!';
    let sender = 'Gromcode';

    const sendMessage = (name) => {
        console.log(`${name}, ${message} Your ${sender}`);
    };
    
    const setMessage = (text) => {
        message = text;
    };

    const setSender = (newSender) => {
        sender = newSender;
    };

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}

