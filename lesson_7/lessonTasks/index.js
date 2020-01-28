// const flatArray = arr => arr.flat()

const flatArray = array => 
    array.reduce((accumulator, element) => {
        return accumulator.concat(element)
    }, [])