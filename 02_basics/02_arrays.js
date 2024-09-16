const marvelHeroes = ['thor','ironman','spiderman']
const dcHeroes = ['superman','batman','flash']

//marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);


// const allheroes = [...dcHeroes,...marvelHeroes]
// console.log(allheroes);



console.log(Array.isArray('Dhairya'))
console.log(Array.from('dhairya'))        //will make array by seperating all values
console.log(Array.from({name : 'dhairya'}))   // interesting

let name = 'dhai,rya'
console.log(name.split(','))


let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1,score2,score3))