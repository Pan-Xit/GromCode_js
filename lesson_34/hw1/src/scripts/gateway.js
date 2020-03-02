const baseUrl = 'https://5e5cb6c497d2ea0014796b6d.mockapi.io/login_form'

export const setUserData = (userData) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
}