import { getLocalTaskList, setLocalTaskList } from './storage.js';
import { renderTasksList } from './renderTasksList.js';
import { getTaskList, updateTask, deleteTask } from './gateway.js';


function onUpdateTask(taskId) {
    const taskList = getLocalTaskList();
    const task = taskList.find(({ id }) => id == taskId)
    
    task.done = !task.done
    task.finishedTimestamp = (task.done ? new Date().getTime() : null)

    updateTask(taskId, task)
        .then(() => getTaskList())
        .then(taskList => {
            setLocalTaskList(taskList)
            renderTasksList()
        })
};


export const onUpdateTaskList = (event) => {
    const action = event.target.dataset.action

    if (!['update', 'delete'].includes(action)) {
        return ;
    }

    const taskId = event.target.closest('.list-item').dataset.id

    if (action === 'update') {
        onUpdateTask(taskId)
    }   else if (action === 'delete') {
        deleteTask(taskId)
            .then(() => getTaskList())
            .then(taskList => {
                setLocalTaskList(taskList)
                renderTasksList()
            })
    }
}

export const updateTasksListeners = () => {
    const taskList = document.querySelector('.list')
    taskList.addEventListener('click', onUpdateTaskList)
}

