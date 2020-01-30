const multiRound = floatNumber => 
    [Math.floor(floatNumber), Math.round(floatNumber), Math.ceil(floatNumber), Math.trunc(floatNumber), +floatNumber.toFixed()]