const multiRound = floatNumber => [
    Math.floor(floatNumber * 100) / 100, 
    Math.round(floatNumber * 100) / 100, 
    Math.ceil(floatNumber * 100) / 100, 
    Math.trunc(floatNumber * 100) / 100, 
    +floatNumber.toFixed(2),
]