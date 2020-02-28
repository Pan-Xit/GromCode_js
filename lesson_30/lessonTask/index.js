export const addImage = (url) => {
    const p = new Promise((resolve, reject) => {
        const pageElem = document.querySelector('.page');

        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My photo');
        imgElem.src = url;

        pageElem.append(imgElem);

        imgElem.addEventListener('load', () => {
            const { width, height } = imgElem;
            resolve({width, height});
        });
    
        imgElem.addEventListener('error', () => {
            reject(new Error('Image load failed'))
        });
    });

    return p

    // return p.then(
    //     res = (data) => console.log(data),
    //     rej = (err) => console.log(err)
    // )
}