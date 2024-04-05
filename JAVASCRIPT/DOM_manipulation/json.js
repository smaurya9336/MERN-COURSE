// let student = {
//     name:"sarita",
//     marks:89
// };

// let json=JSON.stringify(student);
// console.log(json);

// hoppscotch--testing api request tool
// https://hoppscotch.io/


let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact= await getFacts();
    // console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
});



let  url="https://catfact.ninja/fact";


async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("error",e);
        return "NO FACT FOUND";
    }
}

getFacts();

// async function getFacts(){
    // try{
    // let res= await fetch(url);
    // let data=await res.json();
    // console.log(data.fact);

    // let res2= await fetch(url);
    // let data2=await res.json();
    // console.log(data2.fact);
    // }
//     catch(e){
//         console.log(e);
//     }
//     console.log("bye");
// }








// fetch(url)
// .then((response)=>{
//     console.log(response);
//      return response.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url)
// })
// .catch((err)=>{
//     console.log("ERROR",err);
// })














