import { getTaskList } from './src/scripts/gateway.js';
import { setLocalTaskList } from './src/scripts/storage.js';
import { renderTasksList } from './src/scripts/renderTasksList.js';
import './src/scripts/createTask.js';

console.log('Init render')
getTaskList()
    .then(taskList => {
        setLocalTaskList(taskList)
        renderTasksList()
})

const onStorageUpdate = () => {
    console.log('Storage updated')
    renderTasksList()
}

window.addEventListener('storage', onStorageUpdate);


