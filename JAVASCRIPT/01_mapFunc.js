let number=[1,2,3,4,5]
let ans=number.filter((items)=>{
    return items<5;

})

let red=[1,2,3,4]
let final=red.reduce((res,item)=>(res+item))
console.log(final);
