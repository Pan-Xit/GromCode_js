const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');


export function renderUserData(userData = defaultUserData) {
    const { avatar_url, name, location } = userData;

        userAvatar.src = avatar_url;
        userName.textContent = name;
        if (location) {
            userLocation.textContent = `from ${location}`
        }
}

const defaultUserData = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
}