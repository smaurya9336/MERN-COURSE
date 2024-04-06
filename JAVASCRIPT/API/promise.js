const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()

    },1000)
})
promiseOne.then(()=>{
    console.log("promise consumed");

})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})


const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({user:"sarita",email:"sarita@example.com"})


    },1000)

}).then((user)=>{
    console.log(user);

})


const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=true
        if(!err){
            resolve({username:"sarita maurya",password:123})

        }else{
            reject("ERROR:something went wrong")
        }
    
    },1000)
})
.then((user)=>{
    console.log("promise resolve");
    return user.username;

})
.then((username)=>{
    console.log(username);
})

.catch((error)=>{
    console.log("Error",error);
})
.finally(()=>{
    console.log("promise Finally resolved or rejected");

})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    
        let err=true
        if(!err){
            resolve({username:"JavaScript",password:123})

        }else{
            reject("ERROR:JS went wrong")
        }
    
    },1000)
});

async function consumePromiseFive(){
    try{
    const response=await promiseFive
    console.log(response);
    }catch(err){
        console.log(err);
    }
}

consumePromiseFive();



// async function getAllUsers(){
    // try{
//   const response= await fetch('https://jsonplaceholder.typicode.com/users')
//   const data=await response.json()
//   console.log(data);
    // }catch(err){
        // console.log("E",err);
    // }
// }
// getAllUsers();


fetch('https://api.github.com/users/smaurya9336')
.then((response) => {
    return response.json()

})
.then((data) =>{
    console.log(data);

})
.catch((err)=>{
    console.log("E",err);

})