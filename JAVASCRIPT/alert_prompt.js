// console.error("somthing is wrong!");
// let firstName=prompt("enter your name");
// console.log(firstName);


// let rollNumber=prompt("Enter your Roll Number:");
// let firstName=prompt("Enter first name:");
// let lastName=prompt("Enter last name:");
// let msg=rollNumber + " " + firstName +" "+ lastName + "";
// alert(msg);


// let num=60;
// if(num%10==0){
//     alert("Good");

// }
// else{
//     alert("bad");
// }

// let userName=prompt("enter user's name");
// let age=prompt("enter your age");
// alert(`${userName} is ${age } years old.`);


// let quarter=2;
// switch(quarter){
//     case 1:
//         alert("January , February , March");
//         break;
        
       
//     case 2:
//         alert("April , May , June");
//         break;

        
//     case 3:
//         alert("July , August , September");
//         break;
       
       
//     case 4:
//         alert("October , November , December");
//         break;
        
//     default:
//         alert("Not a quarter");
// }


// let str="apples";
// if((str[0]=='a' || str[0]=='A') && (str.length > 5)){
//     alert("Golden string");

// }
// else{
//     alert("not a golden string");
// }

// let a=5;
// let b=20;
// let c=13;
// if(a> b){
//     if(a>c){
//         alert(a,"is largest");
//     }
//     else{
//         alert(c,"is largest.");
//     }
// }
// else {
//     if(b>c){
//         alert(b,"is largest.")
//     }
//     else{
//         alert(c,"is largest.")
//     }
//    }


let num1=32;
let num2=47852;
if((num1%10) == (num2%10)){
    alert("numbers have the same last digit which is "+(num1%10));
}
else{
    alert("numbers don't have the same last digit");
}