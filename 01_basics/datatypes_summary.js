/*/  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3*/


// let string_variable="Harsh"
// let number_variable=55.45
// let boolean_variable=true
// let null_variable=null
// let symbol_variable=Symbol

// console.log(typeof boolean_variable);
// console.log(typeof null_variable);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Haep memory(Non-premitive)  stack memory(premetive)


// let my_youtube_channel="Harsh_channel"
// let anonter_youtube_channel="Sharma_channel"
// anonter_youtube_channel="Sharma_ka_channel"
// console.log(anonter_youtube_channel);

// let userone={
//     email:"user@gogle.com",
//     upi:"user@upi"
// }

// console.log(userone);

// // console.log(typeof(userone));

// let usertwo = userone

// usertwo.email="badlahua@gmail.com"

// console.log(userone.email);
// console.log(usertwo.email);