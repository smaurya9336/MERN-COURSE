// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);


const balance=1000
// if (balance > 500) console.log("test");// short hand

// if (balance < 500) {
//     console.log("less than");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true


if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


