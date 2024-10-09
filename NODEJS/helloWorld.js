const lodash = require('lodash')
console.log("Hello World")

const newName = 'Node.js'

console.log('Hello ', `${newName}`)

if(newName === 'Node.js'){

    console.log("Running on Node.js environment")
}

for(let i=1;i<=10;i++){
    console.log(i)
}

let array = [1,2,3,4,5]
console.log(lodash.reverse(array))
console.log(lodash.capitalize('hello world'))