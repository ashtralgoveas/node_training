// const superHero = require('./super-hero');
// console.log(superHero.getName())

// superHero.setName('Superman')
// console.log(superHero.getName())


// const newSuperHero = require('./super-hero');
// console.log(newSuperHero.getName())



const SuperHero = require('./super-hero');


const batman = new SuperHero('Batman');
console.log(batman.getName());
batman.setName('Bruce Wayne');
console.log(batman.getName());

const superman = new SuperHero('Superman');
console.log(superman.getName())