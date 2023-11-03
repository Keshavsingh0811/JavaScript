const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.map((num) => {
    return num + 10
})

console.log(newNum)

//[
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
 // ]

const newnum1 = myNum.map((num) => {
    return num * 10
}).map( (num) => {
    return num +1
}).filter((num) => {
    return num >40
})

console.log(newnum1)

// [
//     41, 51,  61, 71,
//     81, 91, 101
// ]

