// falsy values 

//false , 0 , -0 , BigInt 0n , "" , null , undefined , NaM 

// rest all are truthy values 

//for example
// "0" , 'false' , " " , [] , {} , function(){}   are all truthy 


console.log(false == 0);



// Nullish Coalescing Operator (??) : 

let val1 = null ?? 10
console.log(val1);