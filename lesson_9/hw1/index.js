const getCustomersList = customersObj =>
    Object.entries(customersObj)
    .map(element => Object.assign(element[1], {'id': element[0]}))
    .sort((a, b) => a.age - b.age)
