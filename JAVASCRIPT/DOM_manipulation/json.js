// let student = {
//     name:"sarita",
//     marks:89
// };

// let json=JSON.stringify(student);
// console.log(json);

// hoppscotch--testing api request tool
// https://hoppscotch.io/

let  url="https://catfact.ninja/fact";

async function getFacts(){
    let res= await fetch(url);
    let data=await res.json();
    console.log(data.fact);
}

getFacts();






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














