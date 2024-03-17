 // if control flow - only execute our condition was true
const isUserLoggedIn = true 
const temperature = 41 
 //if(temperature < 50){

    if(temperature === 40){
    console.log("less than 50");
 }else{
console.log("temperature is greater than 50");
 }


 console.log("execute");
 // ==:- check kya ye brabar hai kya? , 
 // =:- assign the value ,
 // != not true 
 //, < , > <=,>=, 
 //=== :- type chacking ke lie aata hai (===)
 // !== is used  to negative sign 

 // const score = 200 // var is use to global scope :- it shows the output execute and than o/p is execute thats why we cant use var 

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");//es terah se nahi krna hai code nhi  likna hai 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {  // any two conditions are true && 
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {  /// || check for multiple conditions
    console.log("User logged in");
}