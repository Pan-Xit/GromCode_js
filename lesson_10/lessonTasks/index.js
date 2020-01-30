const getMaxAbsoluteNumber = numbersArray => {
    if (!Array.isArray(numbersArray)) {
        return null
    }

    const absNumbersArray = numbersArray.map(element => Math.abs(element))

    return Math.max(...absNumbersArray)
}