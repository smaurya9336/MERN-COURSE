let number=[1,2,3,4,5]
let ans=number.filter((items)=>{
    return items<5;

})

let red=[1,2,3,4]
let final=red.reduce((res,item)=>(res+item))
console.log(final);


console.log(..."Sarita");
let odd=[1,3,5,7,9]
let even=[2,4,6,8]

let nums=[...odd,...even]

console.log(nums);