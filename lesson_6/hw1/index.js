const squareArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null
    };

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i])
    };
    return newArr;
}