const cloneArr = (arr) => {
    // let newArr = arr.slice()
    let newArr = [];
    for (element of arr) {
        newArr.push(element)
    }

    return newArr
}
