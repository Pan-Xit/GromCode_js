const reverseArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    return newArr
}