import { getItem, setItem } from './storage.js';

const counterElem = document.querySelector('.counter');
const counterValue = document.querySelector('.counter__value');


const onCounterChange = (event) => {
    const isButton = event.target.classList.contains('counter__btn')

    if (!isButton) {
        return ;
    }

    const action = event.target.dataset.action;

    const oldValue = Number(counterValue.textContent);

    const newValue = action === "increase" 
        ? oldValue + 1
        : oldValue - 1;

    setItem('counterValue', newValue)
    
    counterValue.textContent = newValue;
}

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = (event) => {
    counterValue.textContent = event.newValue;
}

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
    counterValue.textContent = getItem('counterValue') || 0;
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded)