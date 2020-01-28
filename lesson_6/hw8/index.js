const cloneArr = (arr) => {
    // let newArr = arr.slice()
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }

    return newArr
}
