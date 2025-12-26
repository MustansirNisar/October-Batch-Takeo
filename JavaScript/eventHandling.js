// function sayHello(){
//     alert("Hello, user!")
// }

const button = document.getElementById("btn")
// button.onclick = ()=>{
//     // button.style.backgroundColor = "yellow"
//     // button.style.color = "red"
//     button.style.border = "2px solid black"
//     button.style.height = "120px"
// }
button.onclick = (event)=>{
    // console.log(event)
    console.log(event.target)
    console.log(event.type)
    console.log(event.clientX, event.clientY)
    button.style.backgroundColor = "violet"
    button.style.color = "brown"
    // button.style.border = "2px solid black"
    // button.style.height = "120px"
}



//addEventListener()
let div = document.querySelector("#box")
div.addEventListener("click", ()=>{
    // alert("hello, how are you doing?")
    div.style.border = "4px solid violet"
    div.style.backgroundColor = "aquamarine"
    div.style.width = "400px"
    div.textContent = "You clicked me!"
})
let newFunction = ()=>{
    div.style.height = "200px"
}
div.addEventListener("click", newFunction)

// div.removeEventListener("click", newFunction)