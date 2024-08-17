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


// const id = Symbol(123)
// const another = Symbol(123)
// console.log(id === another);

// const str1 = Symbol('dhairya')
// const str2 = Symbol('dhairya')
// console.log(str1 === str2);


// console.log(typeof id);


// +++++++++++++++++++++ Memory ++++++++++++++++++++++++++++

// Primitive Types => Stack Memory 
// Non - Primitive => Heap Memory


// let myName = 'dhairya'
// let anotherName = myName 


// console.log(anotherName);

// anotherName = 'dhairya bansal'

// console.log(anotherName);
// console.log(myName);


let user = {
    name : 'dhairya',
    email : '@gmail.com',
    id : 2
}

let user2 = user

console.log(user2);

user2.name = 'dhairya bansal'

console.log(user2);
console.log(user);

console.log(user === user2);