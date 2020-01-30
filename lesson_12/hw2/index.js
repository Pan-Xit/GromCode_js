const cleanTransactionsList = transactionArray => 
    transactionArray.slice()
    .filter(element => !isNaN(element))
    .map(element => '$' + (+element).toFixed(2))



// clone array
// delete spaces
// check is element a number
// return new array