let myDate = new Date()
console.log(myDate)               // 2023-10-30T11:43:03.344Z
console.log(typeof(myDate))       // object

console.log(myDate.toString())    //        Mon Oct 30 2023 17:14:13 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())     //        Mon Oct 30 2023
console.log(myDate.toLocaleString());   //     30/10/2023, 5:15:28 pm


let myCreatedDate = new Date("01-03-2023")
console.log(myCreatedDate.toLocaleString())       //     3/1/2023, 12:00:00 am