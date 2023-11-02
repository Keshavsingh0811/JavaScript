const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

if (userLoggedIn && debitCard) {                  // both condition are true the return true
    console.log("Allow to buy course")
}
else{
    console.log("Not allow to buy course")
}


if (loggedInFromEmail || loggedInFromGoogle) {     // at least one condition is true then return true otherwise return false
    console.log("User LoggedIn")
}
else{
    console.log("User not LoggedIn")
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const month = 3

switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("fab")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("apr")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("aug")
        break;
    case 9:
        console.log("sep")
        break;
    case 10:
        console.log("oct")
        break;
    case 11:
        console.log("nov")
        break;
    case 12:
        console.log("dec")
        break;

    default:
        console.log("Default!")
        break;
}

// Falsy value => false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy value => "0", 'false', " ", [], {}, function(){}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const userEmail = []

if (userEmail.length == 0) {
    console.log("Array is empty")            //  Array is empty
}

const empObj = {}

if (Object.keys(empObj).length == 0) {
    console.log("Object is empty")          //   Object is empty
}

