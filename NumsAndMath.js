const score = 400
console.log(score);        // 400

const balance = new Number(100)
console.log(balance);      // [Number: 100]

console.log(balance.toString().length)     // convert to string with length 3
console.log(balance.toFixed(2))      //  100.00   decimal number with two

const otherNumber = 123.5678

console.log(otherNumber.toPrecision(4));     // 123.6   

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));     // 1,00,00,000


//+++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);       // Object [Math] {}
console.log(Math.abs(-5))    // Convert negative value to positive
console.log(Math.round(4.2))   // 4
console.log(Math.ceil(4.3))     // 5
console.log(Math.floor(4.9))     // 4

console.log(Math.random())    // return value 0 and 1

console.log((Math.random()*10) + 1)    // return value 0 to 10 with decimals
console.log(Math.floor(Math.random()*10) + 1)      // return value 0 to 10 without decimals

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)      // return value 10 to 20 




