// Immediately Invoked Function Expressions (IIFE)

(function db() {
    console.log(`DB Connected!`)
})();                                                   //  DB Connected!


((database) => {
    console.log(`db connected! ${database}`)
})(`MongoDb`)                                           //  db connected! MongoDb