import { addImage } from './addImage.js'

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