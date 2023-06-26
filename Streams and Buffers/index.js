const buffer = new Buffer.from("Ashtral")

buffer.write("Code")

console.log(buffer.toString())
console.log(buffer)

buffer.write("Codevolution")
console.log(buffer.toString())
console.log(buffer.toJSON())