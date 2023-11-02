//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++ forof loop  ++++++++++++++++++++++++++++++

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

// 1
// 2
// 3
// 4
// 5


const greetings = "Hello world"
for (const greet of greetings) {
    console.log(greet)
    
}

// H
// e
// l
// l
// o

// w
// o
// r
// l
// d


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('NP',"Nepal")

for (const [key, value] of map) {
    console.log(key, value)    
}

// IN India
// USA United states of America
// NP Nepal

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ forin  ++++++++++++++++++++++++++++
const myObj = {
    js : "java script",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`)
}

// js : java script
// cpp : c++
// rb : ruby