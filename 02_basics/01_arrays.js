
// Array

// -> JS always create shallow copies of arrays which means they share same reference point

// let myArr = [0,1,2,3,4]
// let myNames = ['dhairya','khushi','bansal']

// const myAr2 = new Array(1,2,3,4)
//console.log(myNames);


// Array Methods

// myArr.push(6)
// myArr.push(5)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)              // push in start
// console.log(myArr);
// myArr.shift()                 // pop from start 
// console.log(myArr);


// console.log(myArr.includes(3));
// console.log(myArr.indexOf(10));   // retrurns -1 if not present in array


// const newArr = myArr.join(':') // will join the array and convert in string with the argument passed 


// console.log(newArr);


// slice , Splice
let myArr = [1,2,3,4,5]

const newArr1 = myArr.slice(1,3)  //1st included , 2nd not , and also doesnt change the og array
console.log('A' , newArr1);
console.log('og',myArr);

const newArr2 = myArr.splice(1,3) //1st & 2nd both included and also changes the og array 
console.log('B',newArr2)
console.log('og',myArr);