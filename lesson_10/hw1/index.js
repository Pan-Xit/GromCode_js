const getTotalPrice = numbersArray => {
    const result = numbersArray.reduce((acc, element) => acc + element)

    return '$' + Math.trunc(result * 100) / 100
}