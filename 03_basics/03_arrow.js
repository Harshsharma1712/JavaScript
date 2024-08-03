// const user = {
//     username:"hitesh",
//     price:999,

//     welcomeMessage: function(){
//         // this current context ko reffer karta hae
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //Here the value of 'this' is empty object({}) in node enviroment.
// but in browser value ---> window 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);     
// }

// chai()

// const chai = function(username){
//     let username = "hitesh"
//         console.log(this.username);       
// }

// chai("Harsh")

const chai = () => {
    let username = "hitesh"             //This is arrow function
    console.log(this);       
}

chai("Harsh")

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

const addTwo = (num1,num2) =>  num1 + num2

console.log(addTwo(3,4))