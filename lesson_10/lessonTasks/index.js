const getFiniteNumbers = array => array
    .filter(element => !Number.isFinite(element))

const getFiniteNumbersV2 = array => array
    .filter(element => !isFinite(element))

const getNaN = array => array
    .filter(element => Number.isNaN(element))

const getNaNV2 = array => array
    .filter(element => isNaN(element))

const getIntegers = array => array
    .filter(element => Number.isInteger(element))
