let score =  "33abc"
console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// note :-jab hm ek number ko ocnvert karte hai wo easily convert ho jata but whi hm likhte h "33abc" to NAN means not a number aata hai 
//"33 = 33"
// "33abc"=>  NaN
//true= 1; false=0

let isLoggedIn =" hitesh";
let booleamIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleamIsLoggedIn);



//note: jab hum 1 - true aata ; 0 - false
// "" convert krte hai to false , ""-> false
//"hitesh" -> true


 let someNumber = 33 
 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);