// // Destructuring Objects
 let student = {
     fName: "Pooja",
     age: 20,
     salary: 40000
 }

// // console.log(student.fName)
// // let{fName} = student;
// // let{age} = student;
// // let{salary} = student;
// let{fName, age, salary} = student
// console.log(fName)
// console.log(age)
// console.log(salary)

// //Destructuring Arrays:
// let fruits = ["Apple", "Mango", "Grapes"]

// let[fruit1, fruit2, fruit3] = fruits
// console.log(fruit1)


//spread operator(...)------spread out elements of an array, object, or iterable into individual items.
// let fruits = ["Mango", "Banana", "Cherry"]
// // let newFruits = [...fruits, "Apple"]
// // console.log(newFruits)
// let nums = [1,2,3,4]
// let combined = [...fruits, ...nums]
// console.log(combined)

const user = {
    name: "Bhuvana",
    age: 23
}

let cUser = {...user, country: "India"}

console.log(cUser)
