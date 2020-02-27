export function requestUserData(userId, callback) {

    if (userId === 'broken') {
        callback(null, 'Failed to load user data')
    }

    const randomInterval = Math.ceil(Math.random() * 3) * 1000

    setTimeout(() => {
        callback({
            name: 'John',
            age: 17,
            userId,
            email: 'userid777@example.com',
        }, randomInterval)
        
    })

}