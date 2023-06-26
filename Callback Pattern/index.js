function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
    const name = "Ashtral";
    callback(name);
}

higherOrderFunction(greet)