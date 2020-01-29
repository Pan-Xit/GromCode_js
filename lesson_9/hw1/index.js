const getCustomersList = customersObj =>
    // Create a deep copy of getting object ant transform it to array
    Object.entries(JSON.parse(JSON.stringify(customersObj)))
    // ['id_1', {name: "William", age: 54}] => [{name: "William", age: 54, id: "customer-id-1"}]
    .map(element => Object.assign(element[1], {'id': element[0]}))
    .sort((a, b) => a.age - b.age)
    
