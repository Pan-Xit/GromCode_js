export const reposListElem = document.querySelector('.repo-list')

export function renderUserRepos(reposList) {
    const reposListItems = reposList
        .map(reposObj => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('repo-list__item')

            listItemElem.textContent = reposObj.name

            return listItemElem
        })

    reposListElem.append(...reposListItems)
} 