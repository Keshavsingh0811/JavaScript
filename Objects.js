// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "keshav",
    age : 24,
    [mySym] : "mySymKey",
    location : "Gkp",
    email : "keshav@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "Sat"]
}

// console.log(JsUser["email"])
// console.log(JsUser)

JsUser.email = "Sunny@google.com"
// Object.freeze(JsUser)                      //  does not allow to modify any object
JsUser.age = 22

console.log(JsUser)


JsUser.greeting = function() {
    console.log("Hello JS user")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`)       //      Hello JS user keshav
}

console.log(JsUser.greetingTwo())


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser);         //   { id: '123abc', name: 'sunny', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName : {
            firstName : "keshav",
            lastName : "Singh"
        }
    }
}

console.log(regularUser.fullName.userName.lastName)      //  Singh


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)                                  //    { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = {...obj1, ...obj2}
 
console.log(obj4)                          //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


