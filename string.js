const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// trim is used to start or end space ko remove krta hai

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); /// split method is used to  (2:29:00)The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.

// include :-The includes() method returns true if an array contains a specified value. The includes() method returns false if the value is not found.

//replace:=If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.
//The replace() method searches a string for a value or a regular expression.
//The replace() method returns a new string with the value(s) replaced.
//The replace() method does not change the original string.

