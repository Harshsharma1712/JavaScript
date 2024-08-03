var c = 30
let a = 100

if(true){
    let a = 10
    const b = 20
    c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two();
}

// one()

if (true) {
    const username = "hitesh"
    if (username==="hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

function addOne(value){
    return value + 1
}

console.log(addOne(5))