import { fetchUserData, fetchUserRepos } from './gateway.js';
import { renderUserRepos, reposListElem } from './render/repos.js';
import { renderUserData } from './render/userData.js';
import { showSpinner, hideSpinner } from './render/spinner.js';

const showUserBtn = document.querySelector('.name-form__btn');
const userInput = document.querySelector('.name-form__input');

const onSearchUser = () => {
    const loginName = userInput.value;
    if (!loginName) {
        console.log('Empty input')
        return ;
    }

    reposListElem.innerHTML = ''
    showSpinner()

    fetchUserData(loginName)
        .then(userData => {
            console.log(userData)
            renderUserData(userData)
            return userData.repos_url
        })
        .then(reposUrl => fetchUserRepos(reposUrl))
        .then(reposList => renderUserRepos(reposList))
        .catch(err => alert('Failed to load data'))
        .finally(() => hideSpinner())
}

showUserBtn.addEventListener('click', onSearchUser)