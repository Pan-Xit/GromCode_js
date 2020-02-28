import { addImage } from './addImage.js'


// export function addImageV2(url) {
//     const p = new Promise((resolve, reject) => {
//         addImage(url, (error, data) => {
//             if (error) {
//                 reject(error)
//             } else {
//                 resolve(data)
//             }
//         })
//     })

//     return p
// }


export function addImageV2(url) {
    const p = new Promise((resolve, reject) => {
        const clb = (error, data) => {
            if (error) {
                reject(new Error(error))
            }
            resolve(data)
        }

        addImage(url, clb);
    })
    return p
}