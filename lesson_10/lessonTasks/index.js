const getMaxAbsoluteNumber = numbersArray => {
    if (!Array.isArray(numbersArray) || numbersArray.length === 0) {
        return null
    }

    const absNumbersArray = numbersArray.map(element => Math.abs(element))

    return Math.max(...absNumbersArray)
}