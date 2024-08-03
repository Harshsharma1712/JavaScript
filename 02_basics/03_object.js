//Object litreal

const mysym = Symbol("Key1")

const JsUser = {
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    [mysym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isloogedin:false,
    lastlogindays:["Monday","Saturday"]
}

// console.log(JsUser[mysym]);
// console.log(typeof [mysym]);

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mysym]);

// JsUser.email = "hitesh@gmail.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser)
// JsUser.email = "Harsh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user!")
// }

// // console.log(JsUser.greeting());

// JsUser.greetingtwo = function(){
//     console.log(`Hello JS user ${this.name}`);
// }

// console.log(JsUser.greetingtwo());