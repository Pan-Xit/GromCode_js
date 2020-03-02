import { updateTasksListeners } from './updateTask.js'
import { getLocalTaskList } from './storage.js'

function createHtmlListItem(dateCreated, listItemText, checkboxState = false) {
    const checkboxElem = document.createElement('input');
    checkboxElem.classList.add('list-item__checkbox');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-action', 'update')
    checkboxElem.checked = checkboxState;
    
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item', 'list-item');
    listItemElem.setAttribute('data-id', dateCreated);
    const listItemTextElem = document.createElement('span');
    listItemTextElem.textContent = listItemText;

    const listItemDeleteBtn = document.createElement('button');
    listItemDeleteBtn.classList.add('list-item__delete-btn')
    listItemDeleteBtn.setAttribute('data-action', 'delete')
    
    listItemElem.append(checkboxElem, listItemTextElem, listItemDeleteBtn)
    
    return listItemElem;
}

export function renderTasksList() {
    const listElem = document.querySelector('.list');

    const taskListElems = getLocalTaskList()
        .sort((a, b) => {
            return ((a.done > b.done) - (b.done > a.done) 
            || (b.finishedTimestamp > a.finishedTimestamp) - (a.finishedTimestamp > b.finishedTimestamp) 
            || (b.createdTimestamp > a.createdTimestamp) - (a.createdTimestamp > b.createdTimestamp))
        })
        .map(({ id, text, done }) => {
            const listItemElem = createHtmlListItem(id, text, done);
            
            if (done) {
                listItemElem.classList.add('list-item_selected');
            }
            
            return listItemElem;
        })
    
    // Removing old list
    listElem.innerHTML = ''

    // Adding new list items on page
    listElem.append(...taskListElems);
    
    updateTasksListeners()
}