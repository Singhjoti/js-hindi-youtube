
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);//it is called block scope or global scope
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);//create error beacause eska scope sirf if tak hi h
}

// console.log(username);//eska v scope nhi h es lie ye yahe error create krega


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
//1 syntax 
function addone(num){
    return num + 1
}


//1- syntax
addTwo(5)
const addTwo = function(num){
    return num + 2
}//it create a error because in this code we initialize const addTwo = initialize karne see pehle main use access kar rha hu eslie yaha error generate hoga 
