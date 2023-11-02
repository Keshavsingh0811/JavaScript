//  +++++++++++++++++++++++++++++++++++++++++ foreach +++++++++++++++++++++++++++++++

const coding = ["cpp", "python", "ruby", "js"]

coding.forEach(function (val){
    console.log(val)
})

// cpp
// python
// ruby
// js


coding.forEach( (item) => {
    console.log(item)
})

// cpp
// python
// ruby
// js

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
] 

myCoding.forEach( (item) => {
    console.log(item.languageName)
})

// javascript
// java
// python