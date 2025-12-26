// console.log(window)
// window.console.log("Hello")
// // window.alert("Hello")
//DOM element Selection Methods
//Using the Id
// const heading = document.getElementById("heading")
// console.log(heading)

// let para = document.getElementById("ptag")
// console.log(para)

//Using ClassName
// let boxes = document.getElementsByClassName("boxes")
// console.log(boxes)

//Using Tag Name
// let boxes = document.getElementsByTagName("div")
// console.log(boxes)

//querySelector
// let div = document.querySelector(".boxes")
// console.log(div)

// let heading = document.querySelector("#heading")
// let ptag = document.querySelector("p")

//querySelectorAll()
// let divs = document.querySelectorAll(".boxes")


//DOM Properties
//tagName
// let heading = document.querySelector("#heading")
//innerText...textContent....innerHTML
// let para = document.querySelector("p")
// console.log(para.innerText)
// console.log(para.textContent)
// console.log(para.innerHTML)
// para.textContent = "Welcome here. Let's try to explore the webpage"
// para.innerHTML = "Welcome here. Let's do <b>something</b> interesting"

//Accessing and Modifying Attributes
// console.log(para.getAttribute("id"))
// console.log(para.getAttribute("style"))
// console.log(para.setAttribute("class", "paragraph"))
// console.log(para.setAttribute("style", "background-color: green"))
// para.removeAttribute("id")

//Styles in DOM
//Using the style Property
// let heading = document.querySelector("#heading")
// // heading.style.backgroundColor = "green"
// // heading.style.color = "white"
// // heading.style.fontSize = "20px"
// heading.classList.add("newClass")

//inserting an Element
// let target = document.querySelector("#list")
// let newElement = document.createElement("li")
// newElement.textContent = "React"
// // target.prepend(newElement)
// // target.append(newElement)
// // target.before(newElement)
// target.after(newElement)
//Deleting Elements
let lItem = document.querySelector("li")
lItem.remove()