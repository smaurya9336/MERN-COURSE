 //singleton
//  const tinderUser=new Object()
 
 //non singleton
 const tinderUser={}


tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false


//  console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"sarita",
            lastName:"maurya"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={4:"e",5:"f"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}//spread object
// console.log(obj3);


const users=
    [
    {
        id: 1,
        email: "sarita@gmail.com",
    },
    {
        id: 1,
        email: "sarita@gmail.com",
    },

]
// users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));


