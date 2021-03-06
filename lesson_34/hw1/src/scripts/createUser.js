import { setUserData } from './gateway.js'

const loginForm = document.querySelector('.login-form')
const formInputs = document.querySelectorAll('.form-input')
const formSubmitBtn = document.querySelector('.submit-button')
const errorTextElem = document.querySelector('.error-text')

const onInputChange = (e) => {
    formSubmitBtn.disabled = !loginForm.reportValidity()
    errorTextElem.textContent = ''
}

const onSubmitForm = (e) => {
    e.preventDefault()
    const userData = Object.fromEntries([...new FormData(loginForm)])

    setUserData(userData)
        .then(serverResponse => serverResponse.json())
        .then(responseData => {
            alert(JSON.stringify(responseData));
            [...formInputs].forEach(inputElem => inputElem.value = '')
        })
        .catch(error => {
            errorTextElem.textContent = 'Failed to create user'
        })
}

loginForm.addEventListener('input', onInputChange)
formSubmitBtn.addEventListener('click', onSubmitForm)