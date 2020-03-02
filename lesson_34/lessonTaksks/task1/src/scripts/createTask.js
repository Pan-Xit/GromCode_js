import { setLocalTaskList } from './storage.js';
import { renderTasksList } from './renderTasksList.js';
import { createTask, getTaskList } from './gateway.js'


const buttonCreate = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');

function onCreateTask() {
    const taskName = taskInput.value;
    
    if (!taskName) {
        return false;
    }

    taskInput.value = null

    const newTask = {
        text: taskName,
        done: false,
        createdTimestamp: new Date().getTime(),
        finishedTimestamp: null,
    }

    createTask(newTask)
        .then(() => getTaskList())
        .then(updatedTaskList => {
            setLocalTaskList(updatedTaskList)
            renderTasksList()
        })
}

buttonCreate.addEventListener('click', onCreateTask);