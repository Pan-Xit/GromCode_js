export const fetchUserData = (loginName) => 
    fetch(`https://api.github.com/users/${loginName}`)
        .then(response => response.json())


export const fetchUserRepos= (reposUrl) =>
    fetch(reposUrl)
        .then(response => response.json())