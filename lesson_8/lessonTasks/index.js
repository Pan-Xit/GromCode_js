const transformToObject = array => {
    if (!Array.isArray(array)) {
        return null
    }
    const newObj = {};

    array.forEach(key => newObj[key] = key)

    return newObj
}