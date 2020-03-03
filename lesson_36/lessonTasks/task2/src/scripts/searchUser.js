import { fetchUserData, fetchUserRepos } from './gateway.js';
import { renderUserRepos, reposListElem } from './render/repos.js';
import { renderUserData } from './render/userData.js';
import { showSpinner, hideSpinner } from './render/spinner.js';

const showUserBtn = document.querySelector('.name-form__btn');
const userInput = document.querySelector('.name-form__input');

const onSearchUser = async () => {
    const loginName = userInput.value;
    if (!loginName) {
        console.log('Empty input')
        return ;
    }

    reposListElem.innerHTML = ''
    showSpinner()

    try {
        const userData = await fetchUserData(loginName)
        renderUserData(userData) 
        const userRepos = await fetchUserRepos(userData.repos_url)
        renderUserRepos(userRepos)
    } catch(err) {
        alert('Failed to load data')
    } finally {
        hideSpinner()
    }
}

showUserBtn.addEventListener('click', onSearchUser)