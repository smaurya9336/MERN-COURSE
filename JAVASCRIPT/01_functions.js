
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("A");

}
// sayMyName()

// function addTwoNumber(number1,number2){//parameters
//    console.log( number1 + number2);
// }

function addTwoNumber(number1,number2){
    //   let result=number1+number2
    console.log("Sarita");
    //   return result
    //   console.log(result);
        return number1 + number2
     }


const result=addTwoNumber(2,7)//arguments
// console.log("result:",result);


function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Please enter a username");
        return 

    }
    return `${username} just logged in.`

}
// console.log(loginUserMessage("Sarita Maurya"));
console.log(loginUserMessage());