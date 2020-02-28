import { addImage } from './addImage.js'

export function addImageV2(url) {
    const p = new Promise((resolve, reject) => {
        addImage(url, (error, data) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    })

    return p
}