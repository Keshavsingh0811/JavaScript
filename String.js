let name = "keshav singh"
let age = 24

console.log(`My name is ${name} and my age is ${age}`);

const myName = new String("SunnySingh")

// console.log(myName[0]);
// console.log(myName.length);
// console.log(myName.toUpperCase());

// console.log(myName.charAt(2));
// console.log(myName.indexOf('S'));

const newString = myName.substring(0,4)

console.log(newString);

const anotherString = myName.slice(-10,6)

console.log(anotherString);

const myNewString = "   sunny    "

console.log(myNewString);
console.log(myNewString.trim());

const url = "https://google.com/keshav%20singh"
console.log(url.replace('%20' , '-'))

const name1 = "My name is sunny singh"
console.log(name1.split(' '))