// Imedietly incoked function 

(function chai(){
    // Named iife
    console.log(`DB connected`);    
})();  // ;  --->  use this to run next function 

// chai()
// We use ifie cauz to remove pollution of gloabal scope.

((name) => {
    console.log(`DB connected two ${name}`);
})("Hitesh")