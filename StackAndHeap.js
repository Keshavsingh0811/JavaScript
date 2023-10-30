// Stack => primitive datatype (Copy the data)

let myName = "Keshav Singh"

let anotherName = myName

anotherName = "Sunny Singh"

console.log(myName);
console.log(anotherName);

// Heap => Non-Primitive datatype (Change the actual data)

let userOne = {
    email: "google.com",
    UPI: "use@ybl"
}

let userTwo = userOne

userOne.email = "Keshav@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);

