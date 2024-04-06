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