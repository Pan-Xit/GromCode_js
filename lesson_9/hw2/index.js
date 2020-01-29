const getPeople = roomsObj =>
    Object.values(roomsObj)
    .flat().map(element => element.name)
    
