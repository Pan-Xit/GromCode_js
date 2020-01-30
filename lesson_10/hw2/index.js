const getRandomNumbers = (intNumber, firstNumber, secondNumber) => {
    const randomNumbers = [];

    for (let i = 0; i < intNumber; i++) {
        let randomNumber = Math.ceil(firstNumber) + Math.floor(Math.random() * (secondNumber - firstNumber))

        randomNumbers.push(randomNumber)
    }
    
    return randomNumbers
}