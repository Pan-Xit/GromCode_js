import { renderTasksList } from './src/scripts/renderTasksList.js'
import './src/scripts/createTask.js'

console.log('Init render')
renderTasksList()

const onStorageUpdate = () => {
    console.log('Storage updated')
    renderTasksList()
}

window.addEventListener('storage', onStorageUpdate);


