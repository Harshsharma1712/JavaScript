const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asunc task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise completed");
// })



// const promiseThree = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({userName:"chai", email:"chai@exmaple.com"})
//         },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({userName:"Hitesh",password:"123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })