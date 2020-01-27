const getPrimes = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i <= 3) {
            console.log(i)
        } else if (i % 2 !== 0) {
            let n = 3;
            while (n <= i) {
                if (n === i) {
                    console.log(i)
                } else if (i % n === 0) {
                    break
                } 
                n += 2
            }
        }
    }
}