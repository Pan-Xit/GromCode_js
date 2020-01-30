const sortContacts = (contactArray, isAsc) => 
    contactArray.sort((a, b) => isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))