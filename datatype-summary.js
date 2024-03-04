//# primitive datatype 

// there are seven categories of primitive data type : String , Number , Boolean , Null , undefined, Symbol , BigInt 
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
 let userEmail;
 
 //uses of symbol

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);
 
 // BigInt use 

 const bigNumber = 3456789443465765675n



 //2. non primitive or Reference data types : there are three type of non primitive datatype use like:
//:= Array , Object , functions 


//Array :=
const heros= [ "Shaktiman", "naagraj", "krishna"];

// object:= 
let myobj = {
    name: "jyoti",
    age:21,
}

// functions:= 

const myfunction = function(){
    console.log("hello World");
}


// kisi v element or data ka datatype kya hai wo batata hai simple way hai janne ka :=

console.log( typeof heros);
console.log(typeof Symbol)



//*********************************************Memory**********************************************//

//there are two type of memory : stack type  OR Heap Type Memory 
// when we use stack memory then what ever variable we declare we fine a copy memory of variable...BUt when we define variable in heap 
// we fine a referance of the  original variable:

// stack:= primitive , Heap := non - primitivve  

let myyoutubename = "hiteshchoudharydotcom"

let anothername = myyoutubename
anothername = "chaiaurcode"
console.log(myyoutubename);
console.log(anothername);


let userone = {
    email:"user@google.com",
    upi :"user@ybl"

}


let usertwo = userone
 usertwo.email = "hitesh@google.com"

 console.log(userone.email);
 console.log(usertwo.email);

 // stack me = jitne bhi hamare primitive type ke data type jese stack ,number ,boolean ye sare hmare stack me sstore hote hai
//stack ke andar jitna v object lete hai uska hume copy hi milta hai but in heap me original value ke andar karte hai 