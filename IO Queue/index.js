// const fs = require("fs")

// fs.readFile(__filename,()=> {
//     console.log("this is readFile 1")
// })

// process.nextTick(()=> console.log("this is process.nextTick 1"));
// Promise.resolve().then(()=> console.log("this is Promise.resolve 1"))

// ----------------------------------------------------------------------------------------------

// const fs = require("fs")

// setTimeout(() => console.log("this is setTimeout 1"),0)

// fs.readFile(__filename,()=> {
//     console.log("this is readFile 1")
// })


// ----------------------------------------------------------------------------------------------

const fs = require("fs")

fs.readFile(__filename,()=> {
    console.log("this is readFile 1")
})

process.nextTick(()=> console.log("this is process.nextTick 1"));
Promise.resolve().then(()=> console.log("this is Promise.resolve 1"))
setTimeout(() => console.log("this is setTimeout 1"),0)

for(let i = 0; i < 2000000000; i++){}