export const setLocalTaskList = (taskList) => {
    const editedTaskList = taskList.map(({ _id, ...rest }) => { 
            return {
                id: _id,
                ...rest,
            }
        })
    localStorage.setItem('taskList', JSON.stringify(editedTaskList))
}

export const getLocalTaskList = () => {
    if (!localStorage.getItem('taskList')) {
        return []
    }

    return JSON.parse(localStorage.getItem('taskList'))
}