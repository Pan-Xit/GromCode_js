const splitString = (text, len=10) => {
    if (typeof text !== 'string') {
        return null
    }

    const resultArray = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);

        if (chunk.length === 0) {
            break;
        } else if (chunk.length < len) {
            chunk += '.'.repeat(len - chunk.length)
        }

        resultArray.push(chunk);
        startPosition += len;
    }
    
    return resultArray
}