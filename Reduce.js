const myNum = [1,2,3]

const newNum = myNum.reduce( (pre,curr) => {
    return pre + curr
},0)

console.log(newNum)     //  6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "ml course",
        price: 4999
    }
]

const total = shoppingCart.reduce( (pre, item) => {
    return pre + item.price
},0)

console.log(total)    //  13996
