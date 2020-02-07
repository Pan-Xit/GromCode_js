const listItems = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
]


const addListItems = (listItemsArray) => {
    const listElem = document.querySelector('.list');

    const listItemElems = listItems.map(( {text, done }) => {
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.classList.add('list__item-checkbox');
        checkboxElem.checked = done
        
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item')
    
        if (done) {
            listItemElem.classList.add('list__item_selected')
        }
    
        listItemElem.append(checkboxElem, text)
    
        return listItemElem
    })

    listElem.append(...listItemElems)
}

addListItems(listItems)
