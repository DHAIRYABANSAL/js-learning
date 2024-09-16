//const tinderUser = new Object()   // this will be used in singleton

// const tinderUser = {}

// tinderUser.id = '123'
// tinderUser.name = 'dhairya'
// tinderUser.isLoggedIn  = false;

// console.log(tinderUser);

// const anotherUser = {
//     id : '123',
//     fullname : {
//         username : {
//             firstName : 'dhairya',
//             lastname : 'bansal'
//         }
//     }
// }


// console.log(anotherUser.fullname?.username?.firstName);  //? is good practice

//combining objects  
// const obj1 = {1 : 'a' , 2: 'b'}
// const obj2 = {3 : 'a' , 4: 'b'}
// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2)  //better way, {} is good practice, log it 
// const obj5 = {...obj1,...obj2}   // best way
// console.log(obj4);
// console.log(obj1);  // if {} not added in .assign then this will change


// array of objects 

// const users = [
//     {
//         name : 'dhairya',
//         age : '23' 
//     },
//     {
//         name : 'dhairya',
//         age : '23' 
//     },
//     {
//         name : 'dhairya',
//         age : '23' 
//     }
// ]

// // some methods 

// console.log(Object.keys(anotherUser));
// console.log(Object.values(anotherUser));
// console.log(Object.entries(anotherUser));

// console.log(anotherUser.hasOwnProperty('id'));



// const course = {
//     courseName : "javascript",
//     price : "999",
//     courseStudent : 'dhairya'
// }

// const {courseStudent} = course   // object destructing
// const {courseStudent : student} = course  // object destructing with alias
// console.log(courseStudent);
// console.log(student);




