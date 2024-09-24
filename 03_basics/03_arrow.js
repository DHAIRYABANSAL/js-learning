// const user = {
//     username : 'dhairya',
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.username},welcome to the website`);
//         console.log(this);                  // this refers to current context
//     }
// }



// user.welcomeMessage()

// console.log(this)   // this is empty in node but window in browser 

// function random(){
//     const username = 'dhairya'
//     console.log(this.username)    // cannot access in function
// }
// random()


const random = () => {           // this is how to declare arrow function
    const usernmame =  'hitesh'
}


const addTwo = (num1,num2) => num1+num2  // implicit return 