const listItems = [
    { text: 'Buy milk', done: false, date: new Date() },
    { text: 'Pick up Tom from airport', done: false, date: new Date() },
    { text: 'Visit party', done: false, date: new Date() },
    { text: 'Visit doctor', done: true, date: new Date() },
    { text: 'Buy meat', done: true, date: new Date() },
];

// Creating list items on Page
addListItemsOnPage(listItems);

// HTML elements
const buttonCreate = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');

// Add Event listeners
buttonCreate.addEventListener('click', updateTasksListOnPage.bind(null, listItems));


// Functions
const getInputValue = () => taskInput.value;
const clearInputValue = () => {
    taskInput.value = null;
};


function addListItemsOnPage(listItemsArray) {
    const listElem = document.querySelector('.list');

    // Creating new HTML list items
    const listItemElems = listItemsArray
        .slice()
        .sort((a, b) => ((a.done > b.done) - (b.done > a.done) || (a.date > b.date) - (b.date > a.date)))
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
    addListItemsEventListeners();
}


function addListItemsEventListeners() {
    const listItemCheckboxes = document.querySelectorAll('.list__item-checkbox');

    [...listItemCheckboxes].forEach(checkbox => checkbox.addEventListener('click', updateListItem.bind(null, listItems)))
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


function createNewTask(listItems) {
    const taskName = getInputValue()

    if (taskName) {
        clearInputValue();

        listItems.push({
            text: taskName,
            done: false,
            date: new Date()
        })
    }
}


function updateListItem(listItems) {
    updateListItemStatus(listItems);
    updateListItemsOnPage(listItems);
}


function updateListItemStatus(listItems) {
    const checkbox = event.target;
    const listElement = checkbox.parentElement;

    listItems.forEach(task => {
        if (task.text === listElement.innerText) {
            task.done = !task.done;
        }
    });
}


function updateListItemsOnPage(listItems) {
    // Delete previous list items
    const listElem = document.querySelector('.list');
    listElem.innerHTML = null;

    // Add updated list items on page
    addListItemsOnPage(listItems);
}


function updateTasksListOnPage(listItems) {
    createNewTask(listItems);
    updateListItemsOnPage(listItems);
}