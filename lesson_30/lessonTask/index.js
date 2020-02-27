export function addImage(url) {
    const p = new Promise((resolve, reject) => {
        const pageElem = document.querySelector('.page');

        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'Some picture');
        imgElem.src = url

        pageElem.append(imgElem)
        
        imgElem.addEventListener('load', () => {
            const { width, height } = imgElem;
            resolve({width, height})
        })
    
        imgElem.addEventListener('error', () => {
            reject(new Error('Image load failed'))
        })
    })
}



export function addImage(url, callback) {
    const pageElem = document.querySelector('.page');

    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Some picture');
    imgElem.src = url

    pageElem.append(imgElem)
    imgElem.addEventListener('load', () => {
        const { width, height } = imgElem;
        callback(null, {width, height})
    })

    imgElem.addEventListener('error', () => {
        const errorMessage = 'Image load failed'
        callback(errorMessage)
    })
}