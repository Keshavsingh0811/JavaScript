// For Loops

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(i)
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer table = ${i}`)

    for (let j = 1; j <= 10; j++) {
        
        console.log(i + " * "+ j + " = " + i*j)
    }
    
}

for (let i = 0; i < 20; i++) {

    if(i == 5){
        console.log("Detected 5")
        break;
    }
    console.log(`Value of i is ${i}`) 

    // Value of i is 0
    // Value of i is 1
    // Value of i is 2
    // Value of i is 3
    // Value of i is 4
    // Detected!
    
}
for (let i = 0; i < 7; i++) {

    if(i == 5){
        console.log("Detected 5")
        continue;
    }
    console.log(`Value of i is ${i}`)
    
}

// Value of i is 0
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6