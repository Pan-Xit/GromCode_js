const sortContacts = (contactArray, isAsc=true) => {
    if (!Array.isArray(contactArray)) {
        return null
    }

    return contactArray.sort((a, b) => isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
}
    