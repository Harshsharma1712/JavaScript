const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} is shortcut of ${myObject[key]}`);
}

const programing = ["js", "rb", "py", "java", "cpp"]

for(const key in programing){
    // console.log(programing);
    // console.log(programing[key]);
}

const map = new Map()

map.set('IN','India')
map.set('IN','India')                       
map.set('USA','United States of America')
map.set('FR','France')

for (const key in map) {
    console.log(key);
}