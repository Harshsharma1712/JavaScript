// <, > , <= , >= , == , ===(strict check[check datatype]) , != , !==(strict not equal)

// if
const isUserloggedIn = true
const temprature = 60

// if (temprature < 50) {
//     console.log("less than 50");
// }
// else{
//     console.log("temprature is greater than 50");    
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromgoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy course");
}

if (loggedInfromgoogle || loggedInfromEmail) {
    console.log("User logged in");
}