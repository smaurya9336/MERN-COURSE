

let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);


    let colArr=await getColleges(country);
    
    show(colArr);
});

function show(colArr){
    for (col of colArr) {
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
        
    }

}

async function getColleges(country){
    try{
       let res = await axios.get(url+country);
       return res.data;
    }
    catch(err){
        console.log("error",err);
        return [];
    }
}
// getColleges();















// const url="https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config={Headers: {Accept : "application/json"}};
//         let res=await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log(err);

//     }
// }
// getJokes();