import { updateCheckboxStatusListeners } from './updateTask.js'

function createHtmlListItem(dateCreated, listItemText, checkboxState = false) {
    const checkboxElem = document.createElement('input');
    checkboxElem.classList.add('list__item-checkbox');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = checkboxState;
    
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    listItemElem.setAttribute('data-id', dateCreated)
    
    listItemElem.append(checkboxElem, listItemText)
    
    return listItemElem;
}

export function renderTasksList() {
    const listElem = document.querySelector('.list');

    const listItemElems = Object.values(localStorage)
        .map(rawObj => JSON.parse(rawObj))
        .sort((a, b) => {
            return ((a.done > b.done) - (b.done > a.done) 
            || (b.dateFinish > a.dateFinish) - (a.dateFinish > b.dateFinish) 
            || (b.dateCreated > a.dateCreated) - (a.dateCreated > b.dateCreated))
        })
        .map(({text, done, dateCreated}) => {
            const listItemElem = createHtmlListItem(dateCreated, text, done);
            
            if (done) {
                listItemElem.classList.add('list__item_selected');
            }
            
            return listItemElem;
        })
    
    // Removing old list
    listElem.innerHTML = ''

    // Adding new list items on page
    listElem.append(...listItemElems);
    
    updateCheckboxStatusListeners()
}