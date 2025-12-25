// let student = {
//     fName: "Pooja",
//     id: 1,
//     age: 22,
//     country: "Nepal",
   
// }
// console.log(student)
// console.log(typeof student)
//Accessing the Properties
// console.log(student.fName)
// console.log(student.id)
// console.log(student["age"])

// //Add new property
// student.city = "NY"
// //Update Existing Property
// student.age = 20
// //Delete a Property
// delete student.country
// console.log(student)


// let student = {
//     fName: "Pooja",
//     id: 1,
//     age: 22,
//     country: "Nepal",
//      address: {
//         city: "NY",
//         zip: 1234
//     }
   
// }
// console.log(student.address.city)
// student.address.lane = 22
// console.log(student)


// let student = {
//     fName: "Pooja",
//     id: 1,
//     age: 22,
//     country: "Nepal",
   
// }
//object.keys()
// let keysArr = Object.keys(student)
// console.log(keysArr)
// Object.keys(student).forEach((key)=>{
//     console.log(key,":",student[key] )
// })

//Object.values()
// let valuesArr = Object.values(student)
// console.log(valuesArr)

// let scores = {
//     maths: 90,
//     English: 88,
//     CS: 95
// }
// let Total = Object.values(scores).reduce((sum, val)=>{
//     return sum + val;
// }, 0)

// console.log(Total)

//Object.Entries()

// let student = {
//     fName: "Pooja",
//     id: 1,
//     age: 22,
//     country: "Nepal",
//    }
// let Kv = Object.entries(student)
// console.log(Kv)


// let student = {
//     fName: "Pooja",
//     id: 1,
//     age: 22,
//     country: "Nepal",
//    }
//Objects.freeze()
//Object.seal()
// Object.freeze(student)
// Object.seal(student)
// student.city = "NY"
// student.age = 20
// delete student.id
// console.log(student)

// let student = {
//     fName: "Pooja",
//     id: 1,
//     age: 22,
//     country: "Nepal",
//    }

//    for(let key in student){
//     console.log(key,":", student[key])
//    }

let arr = [1, 2, 4, "sushma", 6]
for(let index in arr){
    console.log(index)
}