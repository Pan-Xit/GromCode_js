// import { addImage } from './addImage.js'

export function addImageV2(url) {
    const p = new Promise((resolve, reject) => {
        addImage(url, clb);

        clb = (error, data) => {
            if (error) {
                reject(new Error(error))
            }

            resolve(data)
        }
    })

    return p
}


const addImage = (url, callback) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;

    const pageElem = document.querySelector('.page');
    pageElem.append(img);
    
    const onImageLoaded = () => {
        const { width, height } = img;
        callback(null, { width, height });
    }
    
    const onImageLoadError = () => callback('Image load failed');
    
    img.addEventListener('load', onImageLoaded);
    
    img.addEventListener('error', onImageLoadError);
};