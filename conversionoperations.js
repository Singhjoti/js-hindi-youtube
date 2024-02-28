let score =  "33abc"
//console.log(typeof score);
//console.log(typeof (score));


let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


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
 //console.log(stringNumber);
 //console.log(typeof stringNumber);



 //****************************OPERATIONS ***************************************//

 let value = 3
 let negvalue = -value
 console.log(negvalue);

//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**2);
//  console.log(2/2);
//  console.log(2%23);


let str1 = "Hello"
let str2 = "jyoti"
let str3= str1 + str2
// console.log(str3);


// console.log("1" + 2);
// console.log(1+ "2");
// console.log("1"+ 2 +2);
// console.log(1 + 2 + "2");


console.log(+true);
console.log(+"");

let num1 , num2, num3
num1 = num2 = num3 = 2+2
console.log(num1);



let gamecounter = 100
gamecounter++;
console.log(gamecounter);




// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);




console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null == 0);
console.log(null>=0);

console.log( undefined == 0);
console.log( undefined > 0);
console.log(undefined < 0);


console.log("2" === 2);