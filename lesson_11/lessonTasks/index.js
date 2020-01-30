const splitText = (text, len=10) => {
    if (typeof text !== 'string') {
        return null
    }
    let resultString = '';
    let startPosition = 0;
    
    while (true) {
        let chunk = text.substr(startPosition, len);
        if (!chunk) {
            break
        }

        resultString += chunk[0].toUpperCase() + chunk.slice(1, ) + '\n'
        startPosition += len
    }
    return resultString
}