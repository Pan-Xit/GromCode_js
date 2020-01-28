const getArrayBounds = (obj) => {
    if (!Array.isArray(obj)) {
        return null
    }
    let len = obj.length
    return [len, obj[0], obj[len - 1]]
}