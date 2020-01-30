const countOccurrences = (text, searchingStr) => {
    if (searchingStr === '') {
        return null
    }

    let resultNumber = 0;
    let startPosition = 0;

    while (true) { 
        let searchResult = text.slice(startPosition, ).search(searchingStr)

        if (searchResult < 0) {
            break
        };

        resultNumber += 1;
        startPosition += searchResult + searchingStr.length;
    }

    return resultNumber
}