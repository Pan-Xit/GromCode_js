const swap = (arr) => {
    const [firstElement, ...args] = arr
    const newArr = [...args, firstElement]

    return newArr
}