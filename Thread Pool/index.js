// const fs = require("node:fs");

// console.log("First");

// fs.readFile("./file.txt", "utf-8", (err,data)=> {
//     console.log("File contents");
// })

// console.log("Last")


// ___________________________________________


const crypto = require("node:crypto");

// const start = Date.now();

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start)



//libuv has 4 threads by default
// we can increase threads by following line
process.env.UV_THREADPOOL_SIZE = 16;
const MAX_CALLS = 16;

const start = Date.now();
for (let i = 0; i< MAX_CALLS; i++)
{
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512",()=>{
        console.log(`Hash: ${i+1}`, Date.now() - start)
    });
}
