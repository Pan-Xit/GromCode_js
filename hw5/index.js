const findDivCount = (a, b, n) => {
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            console.log(i)
        }
    }
}