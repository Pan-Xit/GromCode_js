export function pinger(num, delay) {
    let i = 1;
    console.log('Ping')
    const timer = setInterval(() => {
        if (++i === num) {
            clearInterval(timer)
        }

        console.log('Ping')
    }, delay)
}

