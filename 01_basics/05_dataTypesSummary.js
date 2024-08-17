// *************** Primitive *************** 
// => they are call by value 
// => 7 types 
//1. String
//2. Number 
//3. Boolean 
//4. null
//5. undefined
//6. Symbol
//7. BigInt



// ************** Reference/Non-Primitive ******************
// => call by reference 
//1. Array 
//2. Objects 
//3. functions 


const id = Symbol(123)
const another = Symbol(123)
console.log(id === another);

const str1 = Symbol('dhairya')
const str2 = Symbol('dhairya')
console.log(str1 === str2);


console.log(typeof id);