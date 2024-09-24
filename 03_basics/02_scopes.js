// var c = 300
// if(true)
// {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);           //run the above code to understand scopes of all three



function one(){
    const name = 'dhairya'

    function two(){
        const email = 'd@gmail.com'
        console.log(name)
    }
    two()
    console.log(email)
}

one()