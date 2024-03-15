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




let val1;
// val1=5 ?? 10;
val1=null ?? 10;


console.log(val1);