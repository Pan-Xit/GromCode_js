const baseUrl = 'https://5e5cb6c497d2ea0014796b6d.mockapi.io/tasks'


export const getTaskList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
}

export const createTask = (task) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    })
}

export const updateTask = (taskId, task) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    })
}

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
}