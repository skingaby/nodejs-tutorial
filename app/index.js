// app/index.js

const calc = require('./calc')

const numbersToAdd = [
    1, 
    2, 
    3
]

const result = calc.sum(numbersToAdd)
console.log(`The result is ${result}`)