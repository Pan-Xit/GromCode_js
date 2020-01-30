const getRandomNumbers = (intNumber, firstNumber, secondNumber) => {
    if (secondNumber < firstNumber) {
        return null
    } else if (Math.floor(firstNumber) - Math.floor(secondNumber) === 0) {
        return null
    }

    const randomNumbers = [];

    for (let i = 0; i < intNumber; i++) {
        let randomNumber = Math.ceil(firstNumber) + Math.floor(Math.random() * (secondNumber - firstNumber))

        randomNumbers.push(randomNumber)
    }
    
    return randomNumbers
}