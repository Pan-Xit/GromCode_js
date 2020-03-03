export async function fetchUser(userId) {
    try {
        const resp = await fetch('https://api.github.com/users/' + userId)

        if (resp.status === 404) {
            return null
        }

        const userData = await resp.json()
        return userData
    } catch(err) {
        Promise.reject(new Error('Failed'))
        // throw new Error('Failed')
    }
}