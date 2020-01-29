const getAdults = obj => {
    const adultsOnly = {};

    for (let key in obj) {
        if (obj[key] >= 18) {
            adultsOnly[key] = obj[key]
        }
    }

    return adultsOnly
}