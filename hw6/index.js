const getSum = (obj) => {
    if (!Array.isArray(obj)) {
        return null
    }
    let sum = 0;
    for (let element of obj) {
        sum += element
    }
    return sum
}