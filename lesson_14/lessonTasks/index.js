export default function createMessenger() {
    let message = 'Just learn it!';
    let sender = 'GromCode';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`)
    }
    
    function setMessage(text) {
        message = text;
    }

    function setSender(newSender) {
        sender = newSender;
    }



    // const sendMessage = (name) => {
    //     console.log(`${name}, ${message} Your ${sender}`)
    // }
    
    // const setMessage = (text) => {
    //     message = text;
    // }

    // const setSender = (newSender) => {
    //     sender = newSender;
    // }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}

