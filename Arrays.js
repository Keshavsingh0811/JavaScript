const myArr = [1,2,3,4,5]
console.log(myArr);                //   [ 1, 2, 3, 4, 5 ]

myArr.push(6)
console.log(myArr);               //    [ 1, 2, 3, 4, 5, 6 ]

myArr.pop()
console.log(myArr);               //    [ 1, 2, 3, 4, 5 ]

myArr.unshift(0)
console.log(myArr)               //     [ 0, 1, 2, 3, 4, 5 ]  adding at index zero

myArr.shift()
console.log(myArr)               //      [ 1, 2, 3, 4, 5 ]    delete the first element

console.log(myArr.includes(6))     //   false

const newArr = myArr.join()

console.log(newArr)       //  1,2,3,4,5     convert array to string

console.log("a ", myArr)        //     a [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log(myn1)                   //  [ 2, 3 ]

console.log("b ", myArr)            //   b  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("c ", myArr)             //  c  [ 1, 5 ]   delete the index from 1 to 3 
console.log(myn2)                   //   [ 2, 3, 4 ]  print the deleted elements


const myNewArr = ["keshav", "singh", "sunny"]
const myNewArr1 = ["mota", "Bhai"]

const allNewArr = [...myNewArr, ...myNewArr1]     //  spread operator
console.log(allNewArr)                           //  merge all arrays or concatinate

const another_array = [1,2,3,[4,5,6],[7,[8,9,0]]]

const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr)                                  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(Array.isArray("Keshav"))               //  false

console.log(Array.from("keshav"))              //  [ 'k', 'e', 's', 'h', 'a', 'v' ] convert string to array

const num1 = 100
const num2 = 200
const num3 = 300

console.log(Array.of(num1, num2, num3))        //    [ 100, 200, 300 ]