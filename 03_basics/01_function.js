
function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()

function addTwoNumber(number1,number2){
    console.log(number1+number2);
}

function addTwoNumber(number1,number2){
        // let result = number1+number2
        // return result   
        // console.log("Hitesh");      //No code can written after return 
        return number1+number2
}

// const result = addTwoNumber(4,7);

// console.log("Result:",result);

// console.log(typeof (result));

function loginUserMessgae(username = "Harsh"){
    if(username===undefined){
        console.log("Please enter correct username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessgae("Harsh"))

// console.log(loginUserMessgae("Hitesh"))