// singleton
//Object.create // constuctor method 

//onjects literals


const mySym=Symbol("key1")

const jsUser={
    name:"Sarita",
    "full name":"Sarita Maurya",
    [mySym]:"myKey1",
    email:"sarita@google.com",
    age:23,
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(jsUser);


jsUser.email="sm7767119@gmail.com"
console.log(jsUser.email);
Object.freeze(jsUser)
console.log(jsUser.email);