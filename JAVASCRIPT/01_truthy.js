// truthy and falsy value 

const userEmail=""

//falsy value

// false ,string, 0,-0,BigInt 0n,"", null ,undefined,NAN

// TRUTHY VALUE

// true, "0",'false'," ",[],{},function(){}

if (userEmail.length===0) {
    console.log("Array is empty");
}

const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");

    
}



//null and undefined
let val1;
// val1=5 ?? 10;
// val1=null ?? 10;

val1 = undefined ?? 20;


console.log(val1);


//ternary operator

// condition ? true :false
const iceTeaPrice=100

iceTeaPrice <= 80? console.log("less than 80"):console.log("more than 80");

