const getUsersBlogs = async (usersArr) => {
    try {
        const linksList = await Promise.all(
            usersArr.map(user => getUserData(user)
                .then(userData => userData.blog)
            )
        )
    
        return linksList
    } catch(err) {
        console.error(err)
    }
}

const getUserData = (user) => {
    return fetch('https://api.github.com/users/' + user)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user ' + user)
            }

            return response.json()
        })
}

