// object literals 

const mySym = Symbol("myKey")
const JsUser = {
    name : 'Dhairya',
    "full Name" : 'Dhairya Bansal',         // this value cannot be accessed by . method 
    [mySym] : "myKey1",
    age : 23,
    location : 'haryana',
    isLoggedIn : false,
    lastLoggedIn : ['Monday','Saturday']
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(typeof JsUser[mySym]);

//Object.freeze(JsUser)    // now you cannot change any value, it will not give any error
console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello my name is JsUser')
}

console.log(JsUser.greeting());