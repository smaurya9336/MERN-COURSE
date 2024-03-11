const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);


const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread method

const all_new_heros=[...marvel_heros,...dc_heros,...allHeros]
// console.log(all_new_heros);


const another_arr=[1,2,4,6,8,[2,4,6],7,[4,5,[3,4]]]
const real_another_arr=another_arr.flat(Infinity)
// console.log(real_another_arr);


console.log(Array.isArray("sarita"));
console.log(Array.from("sarita"));
console.log(Array.from({name:"sarita"}));//empty array
// console.log(Array.of("sarita"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));















