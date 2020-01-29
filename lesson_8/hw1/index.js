const pickProps = (obj, array) => {
    const newObjWithPicketProps = {};

    array.forEach(element => {
        if (element in obj) {
            newObjWithPicketProps[element] = obj[element]
        }
    });

    return newObjWithPicketProps
}