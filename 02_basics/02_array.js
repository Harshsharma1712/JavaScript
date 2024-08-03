const marvel_Heroes = ["Thor","IronMan","SpiderMan"]
const dc_Heores = ["SuperMan","Flash","Batman"]

marvel_Heroes.push(dc_Heores)

// console.log(marvel_Heroes);

// console.log(marvel_Heroes[3][1]);

const all_Heroes = marvel_Heroes.concat(dc_Heores)

// console.log(all_Heroes);

const all_new_Heroes = [...marvel_Heroes,...dc_Heores]  //flush Operator

// console.log(all_Heroes);

const another_array = [1,2,3,[4,5],6,7,[8,9,[10,11]]]

const real_anotehr_array = another_array.flat(Infinity)

console.log(real_anotehr_array);

let_array = [1,2,3]

console.log(Array.isArray(let_array));

console.log(Array.from("Mr.H"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));