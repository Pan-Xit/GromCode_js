const reverseArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null
    }
    let newArr = [];
    for (element of arr) {
        newArr.unshift(element)
    }
    return newArr
}