export default (numbersArray) => {
    if (!Array.isArray(numbersArray)) {
        return null;
    } else if (numbersArray.length === 0) {
        return null;
    }

    const numbersMudulesArray = numbersArray.map(element => Math.abs(element));

    const result = Math.min(...numbersMudulesArray)

    return result * result

}


// get modules of all the numbers
// get min number as a result
// return squared result