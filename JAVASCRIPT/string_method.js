// let str="    Hello  ";
// console.log(str);
// console.log(str.trim());

// let name="Sarita Maurya";
// console.log(name.toUpperCase());
// let msg="ILoveCoding"
// console.log(msg.indexOf("Love"));
// console.log(msg.indexOf("o"));

// method chaining

// let msg="      Hello   "
// console.log(msg.trim().toUpperCase());


//  string slice 

// let str="ILoveCoding";
// console.log(str.slice(1,5));
// console.log(str.slice(5));
// console.log(str.replace("Love","do"));
// console.log(str.repeat(2));

//Array

// let fruits=["banana","papaya","mango"]
// fruits[10]="pineapple"
// console.log(fruits[0]);
// console.log(fruits);

// array method
// push:add to value end
// pop:remove value fro end
// unshift:add value to 0 index 
// shift:remove value from 0 index



// array methods


let months=["january","july","march","August"]
// console.log(months);
// console.log(months.indexOf("july"));
// months[0]="july";
// months[1]="june";
// console.log(months);
// console.log(months.includes("march"));
// console.log(months.includes("april"));

//array method
// console.log(months.indexOf("july"));
// console.log(months.includes("march"));
// console.log(months.includes("april"));

// let primary_color=["red","blue","pink","black","yellow"];
// console.log(primary_color);
// let secondary_color=["orange","green","violet"];
// console.log(secondary_color);
// console.log(primary_color.concat(secondary_color));
// let allColor=secondary_color.concat(primary_color);
// console.log(allColor);
// console.log(allColor.reverse());//reverse original array
// console.log(allColor);

 //slice and splice in array

// // console.log(primary_color.slice(1,4));
// console.log(secondary_color.splice(0,0,"skyblue","Hot pink","White"));
// console.log(secondary_color);// change original array
// console.log(primary_color.slice(-2));

//sort method

let days=["Monday","Sunday","Tuesday","Friday","Thursday","Wednesday","Saturday"];
console.log(days.sort());// not work on number

let monthName=["Jan","July","march","August"];
console.log(monthName);
console.log(monthName.splice(0,2,"July","June"));
console.log(monthName);

let technology=["C","C++","HTML","JAVASCRIPT","PYTHON","JAVA","C#","SQL"]
console.log(technology.reverse());
console.log(technology.indexOf("JAVA"));

const arr=[1,2,3,4]
console.log(arr);
arr.push(5);
console.log(arr);


//nested array

let game_arr=[["X",null,"O"],[null,"X",null],["O",null,"X"]]
console.log(game_arr[0][1]);
console.log(game_arr);
game_arr[0][1]="O"
console.log(game_arr);