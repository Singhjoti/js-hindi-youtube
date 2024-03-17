//IIFE:= immediatelly invoked function expression :- use of immediate invoked or execute 
// global scope ke function se jo polutions hhoti hai kayi bar to us glocble scope ke variables or declarations-
// -hai uske polutions ki hatane ke lie hamne iife ka use kiya

//(function chai(){
  //  console.log('DB connected');
//})(); // in this 1st() is used to define the function and  2nd() is used to execution call.
// agr hum dono ko add karke run karte hai to first code ko ni band karte hai tabb wha error aata or subko lagta hai arrow function ke karn esie mujhe ; bnd karna hai 
 //agr 2iife ko ek sath likhna hoo to use ; ka hota hai
//( function aurcode() {
//console.log('DB CONNECTED TWO')
//})()

//( (name) => {
   // console.log('DB CONNECTED TWO ${name}');
//} )('jyoti')


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')