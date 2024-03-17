//this keyword is use to define the current context ke bare me btata hai. or current context ko reffer karta hai
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage() // context means  simple value jo v aapke variable hai wo kya hai kya store kar rhe h 
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  note :- jab hum node environment ke andar hote hai to this mera empty hota hai or wo empty string ki treh behave  karta hai 


//note :- browser ke andar jo object hai wo hamara window object hai tabhi to hum ese click form submit ho gya kar or ye sb kar pate hai 


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
 
//note:- we can't use this   in function but only use in objects

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// note:-

// jo v parameter hai wo hta dijiye or wo ban gya arrow function => use array.
// there are two function in js :- 1. Arrow function 2. regular function 
// 1 Arrow function:- Arrow functions was introduced in ES6. And it introduced a simple and shorter way to create functions.
//  (ii) arrow function don't have its own this. and also Availability of arguments object:- not available in arrow functions.
//  (iii) Arrow functions was introduced in ES6. And it introduced a simple and shorter way to create functions.
// Do not have their own this, arguments, super, or new.target bindings. Instead, they inherit these from the enclosing scope.
// Cannot be used as constructors (i.e., you cannot use new with arrow functions).
// Best suited for short, simple functions, especially when you want to maintain a shorter, more readable syntax.
// Automatically return the result of the expression if there are no curly braces {} around the function body.

//  2.regular function:-Regular functions have their own this context. And this is determined dynamically depending on how you call or execute the function.
//  Availability of arguments objects: available in regular functions. Example using regular ():
// Regular Functions:
// The traditional way of defining functions in JavaScript.
// Syntax: function functionName(parameters) { statements }.
// Have their own this, arguments, super, and new.target bindings.
// Can be used as constructors with the new keyword to create instances.
// More flexible and suitable for complex functions, especially those that require custom binding of this or use of arguments.

// Comparison:
// Use arrow functions for concise, simple functions that don’t require their own this binding or other special features.
// Use regular functions when you need more control over this, when defining methods within classes, or when working with constructor functions.
// Arrow functions are often preferred in modern JavaScript code for their readability and shorter syntax, but regular functions are still essential for certain scenarios.




const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return := maine man liya aapko likhne ki jrurt nahi hai, and ,exlicit return:- wo hota hai jisme hm return likhte

// agar {} ho to return keyword likhna pdega but () likhe to retun keyword nahi likhna pdega.


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) use in react 

const addTwo = (num1, num2) => ({username: "hitesh"})//object me return karne ke lie aapkoo parathesis() me likhna pdega.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// arror function is a global scope