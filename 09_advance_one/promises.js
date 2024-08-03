// const promiseOne = new Promise(function(resolve,reject){
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

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.userName
// }).then((userName)=>{
//     console.log(userName);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise either resolved or rejected");
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))