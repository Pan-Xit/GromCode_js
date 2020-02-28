const servers = [
    'https://server.com/us/',
    'https://server.com/eu/',
    'https://server.com/au/'
]

const getRandomDelay = (from, to) => {
    return from + Math.random() * (to - from)
}

const request = (url) => new Promise(resolve => {
        const randomDelay = getRandomDelay(1000, 3000)

        setTimeout(() => {
            resolve({
                userData: {
                    name: 'Tom',
                    age: 17
                },
                
                source: url
            });
        }, randomDelay);
    });


const getUserASAP = (userId) => {
    const urls = servers.map(serverUrl => `${serverUrl}${userId}`)
    const requests = urls.map(url => request(url))

    return Promise.race(requests)
}