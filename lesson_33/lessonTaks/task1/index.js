const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const showUserBtn = document.querySelector('.name-form__btn');
const userInput = document.querySelector('.name-form__input');


function fetchUserData(loginName) {
    return fetch(`https://api.github.com/users/${loginName}`)
        .then(response => response.json())
}


function renderUserData(userData) {
    const { avatar_url, name, location } = userData;

        userAvatar.src = avatar_url;
        userName.textContent = name;
        if (location) {
            userLocation.textContent = `from ${location}`
        }
}


const onSearchUser = () => {
    const loginName = userInput.value;
    if (!loginName) {
        console.log('Empty input')
        return ;
    }

    fetchUserData(loginName)
        .then(userData => renderUserData(userData))

}

showUserBtn.addEventListener('click', onSearchUser)