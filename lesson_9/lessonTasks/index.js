const getAdults = userObj => Object.entries(userObj)
    .filter(element => element[1] >= 18)
    .map(element => element[0])