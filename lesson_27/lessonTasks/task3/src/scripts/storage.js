// export const listItems = {
//     counter: 5,

//     1: {text: 'Buy milk', done: false, dateCreated: new Date(), dateFinish: null },
//     2: {text: 'Pick up Tom from airport', done: false, dateCreated: new Date(), dateFinish: null },
//     3: {text: 'Visit party', done: false, dateCreated: new Date(), dateFinish: null },
//     4: {text: 'Visit doctor', done: true, dateCreated: new Date(), dateFinish: null },
//     5: {text: 'Buy meat', done: true, dateCreated: new Date(), dateFinish: null },
// };

export const setItem = (text) => {
    const newItemId = new Date().getTime();

    localStorage.setItem(newItemId, JSON.stringify({
        text,
        done: false,
        dateCreated: newItemId,
        dateFinish: null,
    }))
}

export const getItem = (itemId) => {
    return JSON.parse(localStorage.getItem(itemId))
}

export const updateItem = (itemId, newItem) => {
    localStorage.setItem(itemId, JSON.stringify(newItem))
}