const listItems = [
    { text: 'Buy milk', done: false, dateCreated: new Date(), dateFinish: null },
    { text: 'Pick up Tom from airport', done: false, dateCreated: new Date(), dateFinish: null },
    { text: 'Visit party', done: false, dateCreated: new Date(), dateFinish: null },
    { text: 'Visit doctor', done: true, dateCreated: new Date(), dateFinish: null },
    { text: 'Buy meat', done: true, dateCreated: new Date(), dateFinish: null },
];

// Creating list items on Page
addListItemsOnPage(listItems);

// HTML elements
const buttonCreate = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');

// Add Event listeners
buttonCreate.addEventListener('click', updateTasksListOnPage.bind(null, listItems));


// Functions
function addListItemsOnPage(listItemsArray) {
    const listElem = document.querySelector('.list');
    
    // Creating new HTML list items
    const listItemElems = listItemsArray
    .slice()
    .sort((a, b) => {
        return ((a.done > b.done) - (b.done > a.done) 
        || (b.dateFinish > a.dateFinish) - (a.dateFinish > b.dateFinish) 
        || (b.dateCreated > a.dateCreated) - (a.dateCreated > b.dateCreated))
    })
    .map(( {text, done }) => {   
        const listItemElem = createHtmlListItem(text, done);
        
        if (done) {
            listItemElem.classList.add('list__item_selected');
        }
        
        return listItemElem;
    });
    
    // Adding new list items on page
    listElem.append(...listItemElems);
    
    // Adding EventListeners for new list elements
    const listItemCheckboxes = document.querySelectorAll('.list__item-checkbox');
    
    [...listItemCheckboxes].forEach(checkbox => {
        return checkbox.addEventListener('click', updateListItem.bind(null, listItems))
    });
}

function createHtmlListItem(listItemText, checkboxState = false) {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.classList.add('list__item-checkbox');
    checkboxElem.checked = checkboxState;
    
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    
    listItemElem.append(checkboxElem, listItemText)
    
    return listItemElem;
}

function updateListItem(listItems) {
    // New checkbox state from page
    const checkbox = event.target;
    const listElement = checkbox.parentElement;
    
    // Update list item
    listItems.forEach(task => {
        if (task.text !== listElement.innerText) {
            return;
        }

        task.done = !task.done;
    
        if (task.done) {
            task.dateFinish = new Date()
        } else {
            task.dateFinish = null
        }
    });

    updateListItemsOnPage(listItems);
}


function updateListItemsOnPage(listItems) {
    // Delete previous list items
    const listElem = document.querySelector('.list');
    listElem.innerHTML = null;
    
    // Add updated list items on page
    addListItemsOnPage(listItems);
}


function updateTasksListOnPage(listItems) {
    const taskName = taskInput.value;
    
    if (taskName) {
        // Clear input field
        taskInput.value = null
        
        // Create new task
        listItems.push({
            text: taskName,
            done: false,
            dateCreated: new Date(),
            dateFinish: null,
        })
    }

    updateListItemsOnPage(listItems);
}