let result = 0;

for (let i = 1; i <= 1000; i++) {
    result += i
}

const reminder = result % 1234;
const integer = (result - reminder) / 1234;

console.log(integer > reminder)