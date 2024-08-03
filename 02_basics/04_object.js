// const tinderuser = new Object()
const tinderuser = {}

// tinderuser.id = "123abc"
// tinderuser.name = "Sammy"
// tinderuser.isloogedin = false
// console.log(tinderuser);

const regularUser = {
    email:"some@gamil.com",
    fullNmae:"Hasrh Sharma",
    anotherObject:{
        anotherObjectanother:{
            firstName:"Harsh",
            lastName:"Sharma",
        }
    }
}

// console.log(regularUser.anotherObject.anotherObject2);

const object1 = {1:"a",2:"b"}
const object2 = {3:"c",4:"d"}
const object3 = {5:"e",5:"f"}

// const object4 = {object1,object2}
// const object4 = Object.assign({},object1,object2,object3)

const object4 = {...object1,...object2}

// console.log(object4);

const user101 = {
    name:"Harsh sharma",
    id:244201,
    emailId:"Harsh@gmail.com",
    Address:"Jaipur"
}

// console.log(Object.keys(user101));
// console.log(typeof Object.keys(user101));


// const course = {
//     courseName:"JS in Hindi",
//     price:"999",
//     courseInstructor:"Hitesh",
// }

// console.log(course.courseInstructor);

// const {courseInstructor:instructor} = course

// console.log(instructor);


// Jason --> API value ese aate hae

// {
//     "name":"hitesh",
//     "courseNAme:"js hindi"
// }


// Sometimes API comes in Array formate 