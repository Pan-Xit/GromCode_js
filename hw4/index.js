const m = 0;
const n = 20;
let result = 0;

for (let i = m; i <= n; i++) {
    console.log(i)
    if (i % 5 == 0) {
        console.log(i)
    }
    if (i % 2 == 0 && i % 4 != 0) {
        // console.log('sum')
        result += i;
    } else if (i % 3 == 0) {
        // console.log('sub')
        result -= i
    } else if (i % 4 == 0) {
        // console.log('mul')
        result *= i;
    }
    // console.log(`Result: `, result)
}