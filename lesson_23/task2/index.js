const sectors = document.querySelector('.sectors')

const generateArray = (start, end) => {
    const array = [];
    
    for (let i = start; i <= end; i++) {
        array.push(i)
    }

    return array;
}

const generateSectorSeats = () => {
    return generateArray(1, 10).map(index => {
        return `<div 
        class="sector__seat"
        data-seat-number="${index}"
        ></div>`
    }).join('')
};

const generateSectorLines = () => {
    return generateArray(1, 10).map(index => {
        return `<div 
        class="sector__line"
        data-line-number="${index}"
        >${generateSectorSeats()}</div>`
    }).join('')
};

const generateSectors = () => {
    const sectorsHtml = generateArray(1, 3).map(index => {
        return `<div 
        class="sector"
        data-sector-number="${index}"
        >${generateSectorLines()}</div>`
    }).join('')

    sectors.innerHTML = sectorsHtml
};

generateSectors()

const sector = document.querySelectorAll('.sector');
const sectorLine = document.querySelector('.sector__line');
const secrotSeat = document.querySelector('.sector__seat');
const boardValue = document.querySelector('.board__value');


const getChoosenSeat = (event) => {
    const seatNumber = event.target.dataset.seatNumber;
    const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
    const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

    const choosenSeat = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
    boardValue.innerText = choosenSeat
}


[...sector].forEach(sector => sector.addEventListener('click', getChoosenSeat))