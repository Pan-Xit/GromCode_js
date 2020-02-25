import { getItem, updateItem } from './storage.js';
import { renderTasksList } from './renderTasksList.js';


function updateTask(event) {
    const taskId = event.target.closest('.list__item').dataset.id

    const currentTask = getItem(taskId)

    currentTask.done = !currentTask.done

    if (currentTask.done) {
        currentTask.dateFinish = new Date().getTime()
    } else {
        currentTask.dateFinish = null
    }

    updateItem(taskId, currentTask)
    renderTasksList()
};


export function updateCheckboxStatusListeners() {
    const listItemCheckboxes = document.querySelectorAll('.list__item-checkbox');

    [...listItemCheckboxes].forEach(checkbox => {
        return checkbox.addEventListener('click', updateTask)
    });
}

