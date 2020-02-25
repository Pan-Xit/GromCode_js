import { setItem } from './storage.js';
import { renderTasksList } from './renderTasksList.js';


const buttonCreate = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');

function createTask() {
    const taskName = taskInput.value;
    
    if (!taskName) {
        return false;
    }

    taskInput.value = null

    setItem(taskName)
    renderTasksList()
}

buttonCreate.addEventListener('click', createTask);