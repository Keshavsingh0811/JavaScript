const promiseOne = new Promise((resolve, reject) =>{
    setTimeout(function() {
    console.log("Async task1 is completed!")
    resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("promise consumed!")
})

new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log("Async task2 is completed!")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)

})

promise3.then(function(user) {
    console.log(user)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else{
            reject("Something went wrong!")
        }
    }, 1000)

})

promise4.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
