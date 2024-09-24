sayMyName()
function sayMyName(){                 // this way is called function declaration
    console.log('D');
    console.log('H');
    console.log('A');
    console.log('I');
    console.log('R');
    console.log('Y');
    console.log('A');
 }
 

 const sayMyName2 = () => {              // this way is calles function declaration
    console.log('D');
    console.log('H');
    console.log('A');
    console.log('I');
    console.log('R');
    console.log('Y');
    console.log('A');
 }
 // sayMyName function can be accessed before initialization but sayMyName2 cannot this is call function hoisting 

 //sayMyName()            // function execution 


function loginUser(username){
    return `user ${username} just logged in`      // string interpolation
}

//console.log(loginUser())


function calculateCartPrice(...num){       // ... is rest operator 
    return num
}

//console.log(calculateCartPrice(200,300,400));


const item = {
    name : 'phone',
    prices : '100000'
}

function handleObject(anyObject){
    if(!anyObject.name || !anyObject.price)
    {
        console.log('bad object');
        return 
    }
     console.log(`name is ${anyObject.name} and price is ${anyObject.price}`);

}
handleObject(item)