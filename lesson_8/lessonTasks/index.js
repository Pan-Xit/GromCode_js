const concatProps = obj => {
    const array = [];

    for (let key in obj) {
        array.push(obj[key])
    }

    return array
}