// for of
//high order array
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greetings="helloworld"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
    
}

//maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")

console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
    
}