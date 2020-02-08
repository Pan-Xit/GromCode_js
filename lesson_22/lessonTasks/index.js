const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventListElem = document.querySelector('.event-list');
const btnClearElem = document.querySelector('.btn_clear');
const btnAttachElem = document.querySelector('.btn_attach');
const btnRemoveElem = document.querySelector('.btn_remove');


btnClearElem.addEventListener('click', cleanEventListArea);
btnAttachElem.addEventListener('click', acitvateRectListeners);
btnRemoveElem.addEventListener('click', deactivateRectListeners);


function addTextOnClick (text, color) {
    const textOnClick = `<span style="color: ${color}">${text}</span>`;

    eventListElem.innerHTML += textOnClick;
}

const addGreenDiv = addTextOnClick.bind(null, 'DIV', 'green');
const addGreenP = addTextOnClick.bind(null, 'P', 'green');
const addGreenSpan = addTextOnClick.bind(null, 'SPAN', 'green');

const addGreyDiv = addTextOnClick.bind(null, 'DIV', 'grey');
const addGreyP = addTextOnClick.bind(null, 'P', 'grey');
const addGreySpan = addTextOnClick.bind(null, 'SPAN', 'grey');

function cleanEventListArea () {
    eventListElem.innerHTML = null
}

function acitvateRectListeners () {
    divElem.addEventListener('click', addGreyDiv, true);
    divElem.addEventListener('click', addGreenDiv);
    
    pElem.addEventListener('click', addGreyP, true);
    pElem.addEventListener('click', addGreenP);
    
    spanElem.addEventListener('click', addGreySpan, true);
    spanElem.addEventListener('click', addGreenSpan);
}

function deactivateRectListeners () {
    divElem.removeEventListener('click', addGreyDiv, true);
    divElem.removeEventListener('click', addGreenDiv);
    
    pElem.removeEventListener('click', addGreyP, true);
    pElem.removeEventListener('click', addGreenP);
    
    spanElem.removeEventListener('click', addGreySpan, true);
    spanElem.removeEventListener('click', addGreenSpan);
}

acitvateRectListeners ()