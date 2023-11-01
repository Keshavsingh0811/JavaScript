if(true){
    let a = 10
    const b = 20
    var c = 30
}                          // Block scoped access only within the block

// console.log(a)    // a is not defined
// console.log(b)    // b is not defined
console.log(c)     // 30

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
let a = 200                // Global scoped access from anywhere
let b = 300

console.log(a)   
console.log(b) 


function one(){
    const userName = "keshav"
    function two(){
        const website = "Youtube"
        console.log(userName)
    }
    //console.log(website)
    two()
}

one()






