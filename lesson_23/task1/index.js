const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password');
const errorEmailInput = document.querySelector('.error-text_email');
const errorPassInput = document.querySelector('.error-text_password');
const loginForm = document.querySelector('.login-form');


const isFill = (value) => value ? undefined : 'Required';

const isEmail = (value) => value.includes('@')
    ? undefined : 'Should be an email';

const validators = {
    email: [isFill, isEmail],
    password: [isFill],
}

const customValidation = (dataType, value) => {
    return validators[dataType]
        .map(validator => validator(value))
        .filter(error => error)
        .join(', ')
    }

const emailValidation = (event) => {
    const inputErrors = customValidation('email', event.target.value);

    errorEmailInput.innerHTML = inputErrors;
}

const passValidation = (event) => {
    const inputErrors = customValidation('password', event.target.value);

    errorPassInput.innerHTML = inputErrors;
}

emailInput.addEventListener('input', emailValidation)
passInput.addEventListener('input', passValidation)

const manageFormData = (event) => {
    event.preventDefault();
    
    const userData = [...new FormData(loginForm)]
        .reduce((acc, [prop, value]) => Object.assign(acc, { [prop]: value }), {})

    alert(JSON.stringify(userData))
}

loginForm.addEventListener('submit', manageFormData)
