// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    if(greet == " "){
        // console.log("Space dected");
        break
    }

    // console.log(`Each charcter is ${greet}`);

}

// Maps

const map = new Map()

map.set('IN','India')
map.set('IN','India')                       //Map has unique value it can't take same value
map.set('USA','United States of America')
map.set('FR','France')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,":-",value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderMan'
}

// for (const [key,value] of myObject) {
//     console.log(key,":-",value);
// }