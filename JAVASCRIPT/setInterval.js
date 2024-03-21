// console.log("hii there");
// let id=setInterval( () =>{
//     console.log("apna college");
// },2000)
// console.log(id);
// clearInterval(id)


let id = setInterval( ()=>{
    console.log("Hello World!");
},2000)

setTimeout(()=>{
    clearInterval(id)
    console.log("clear interval run");
},10000)