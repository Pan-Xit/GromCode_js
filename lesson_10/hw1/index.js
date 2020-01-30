const getTotalPrice = numbersArray => {
    const result = numbersArray.reduce((acc, element) => acc + element)

    return '$' + Math.floor(result * 100) / 100
}