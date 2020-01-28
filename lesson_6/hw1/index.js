const squareArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null
    };

    let newArr = [];
    for (element of arr) {
        newArr.push(element * element)
    };
    return newArr;
}