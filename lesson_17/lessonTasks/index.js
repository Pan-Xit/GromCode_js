const defer = (func, ms) => {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms)
    }
}

// const sayHi = (name) => {
//     console.log(`Hi, ${name}`)
// }

// const deferSayHi = defer(sayHi, 1000);

// deferSayHi('Tom')

// const user = {
//     name: 'Bob',

//     sayHi() {
//         console.log('Hello,', this.name)
//     }
// }

// const deferUserSayHi = defer(user.sayHi, 1000)

// deferUserSayHi.call(user)