//for loop

for(let i=1;i<=10;i++){
    if(i==5){
        // console.log("5 is best number");
    }
    // console.log(i);
}
//

for(let i=1;i<=10;i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inner Loop ${j} and inner loop ${i}`);
        // console.log(i+ "*"+ j + " = "+i*j);
    }
}

let myArray=["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//break and continue

for(let i=1;i<=10;i++){
    if(i==5){
        // console.log(`5 is best number`);
        // break;
        continue;

    }
    // console.log(`Value of i is ${i}`);
    
}

//

for (let index = 1; index <= 15; index=index+2) {
    
//   console.log(index);
    
}

for (let index = 2; index <= 1000; index=index+2) {
    console.log(index);
    
}





