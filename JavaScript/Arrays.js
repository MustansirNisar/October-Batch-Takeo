//Syntax
// let arrayName = [value1,  value2,  value3, value4, ...]

// let frutit1 = "mango"
// let frutit2 = "strawb"
// let frutit3 = "orange"

// let fruits = ["Mango", "Strawberry", "Orange", "Apple"]
// console.log(fruits[2])
// console.log(fruits[3])
// // console.log(fruits.length)
// fruits[1] = "Grapes"
// console.log(fruits)

// for(let i=0; i<fruits.length; i++){
//     console.log(`The fruit at index ${i} is ${fruits[i]}`)
// }
// for(let f of fruits){
//     console.log(f.toUpperCase())
// }

// let text = "Something"
// let size = 0;
// for(let char of text){
//     console.log(char)
//     size++;
// }
// console.log(size)

// let fruits = ["Mango", "Strawberry", "Orange", "Apple"]
//Simple Array Methods
//push()....Adds an item to the end of an array
// fruits.push("Kiwifruit")
// console.log(fruits)

//pop()...Removes the last item from an array
// let last = fruits.pop()
// console.log(fruits)
// console.log(last)

// unshift()...Adds an item to the beginning of an array
// fruits.unshift("Litchi")
// console.log(fruits)

// let fruits = ["Mango", "Strawberry", "Orange", "Apple"]
//shift()...Removes the first item of an array
// fruits.shift();
// console.log(fruits)

//concat()....Merges two or more arrays
// let nums = [1, 2, 3, 4]
// let concatt = fruits.concat(nums)
// console.log(concatt)

//slice()...creates a copy of an array
// let newArr = fruits.slice(0,2)
// console.log(newArr)

//splice()...Adds or removes items from any position in the array.
// let fruits = ["Mango", "Strawberry", "Orange", "Apple"]
// fruits.splice(1, 0, "Grapes" )
// console.log(fruits)

//forEach()
// let fruits = ["Mango", "Strawberry", "Orange", "Apple"]
// fruits.forEach(function (currentValue, Index, Array){
//     console.log(`${currentValue} is at index ${Index} in the array ${Array}`)
// })
// fruits.forEach((fruit, i,  arr)=>{
//     console.log(fruit, "at index: ", i)
// })
// let nums = [1, 2, 3, 4]
// let newArr = nums.forEach((num)=>{
//     console.log(num*num)
// })
// console.log(newArr)

//map()
// let nums = [1, 2, 3, 4, 5, 6]
// let newArr = nums.map((currenValue, index, array)=>{
//     return currenValue*2
// })
// console.log("Original Array: ",nums)
// console.log("Updated Array: ", newArr)

// let num = (num)=>{
//     return num*2
// }

// filter()
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = nums.filter((num)=>{
//     // return num%2===0;
//     return num>5;
// })
// console.log("Original Array: ", nums)
// console.log("Array of Even Numbers: ", newArr)

// let names = ["Birendra", "Pooja", "Sushma", "Bhuvana", "Abhishek", "John", "Sara"]
// let longNames = names.filter((name)=>{
//     return name.length>5;
// })
// console.log(longNames)

//reduce()
// Array.reduce((accumulator, currenValue, Index, Array)=>{
//         //code to run
// }, initialValue)

// const numbers = [2, 3, 5, 6, 10, 20, 30]
// let initialValue = 0;
// let Total = numbers.reduce((acc, curr)=>{
//     return acc+curr;
// }, initialValue)
// console.log(Total)

// let numbers = [1, 40, 2, 30, 15, 4, 70]
// let initialValue = 0;
// let Largest = numbers.reduce((acc, curr)=>{
//         return acc>curr?acc:curr
// }, initialValue)
// console.log(Largest)