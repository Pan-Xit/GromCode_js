export const fetchUserData = async (loginName) => {
    const response = await fetch(`https://api.github.com/users/${loginName}`)
    if (!response.ok) {
        throw new Error('Failed to fetch user data')
    }

    const userData = await response.json()
    return userData
}


export const fetchUserRepos = async (reposUrl) => {
    const response = await fetch(reposUrl)
    if (!response.ok) {
        throw new Error('Failed to fetch user data')
    }

    const userRepos = await response.json()
    return userRepos
}