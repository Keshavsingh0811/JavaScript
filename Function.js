function myName() {
    console.log("keshav")
}

myName()        // keshav


function sumTwoNum(num1, num2) {        // function as a parameter
    console.log(num1+num2)
}

sumTwoNum(2, 3)    //  5            function as a arguments

function sum(num1,num2){
    const result = num1+num2
    return result
}

const result = sum(3,4)
console.log(result)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter valid username")
        return
    }
    return `${username} just Loged In`
}

console.log(loginUserMessage("keshav"))
console.log(loginUserMessage())

function calculatePrice(...num){
    return num
}

console.log(calculatePrice(100,200,300))      //  [ 100, 200, 300 ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
    userName : "keshav",
    price : 3452
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} & price is ${anyobject.price}`)
}

handleObject(user)    //   Username is keshav & price is 3452

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newArray = [100,200,300,400]

function returnValue(anyvalue){
    return anyvalue[1]
}

console.log(returnValue(newArray))     //  200
