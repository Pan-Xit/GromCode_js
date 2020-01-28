const removeDuplicates = (arr) => {
    if (!Array.isArray(arr)) {
        return null
    }

    let uniqueElements = [];
    let isUniq;
    for (let element of arr) {
        isUniq = true;
        for (let uniqElement of uniqueElements) {
            if (element === uniqElement) {
                isUniq = false;
                break
            }
        }
        if (isUniq) {
            uniqueElements.push(element)
        }
    }

    return uniqueElements
}