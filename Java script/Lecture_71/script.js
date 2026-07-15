
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").hidden)

document.querySelector(".box").innerHTML = "hey I'm soham "
console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
document.querySelector(".box").setAttribute("style","display:inline")
console.log(document.querySelector(".box").getAttribute("style"))


console.log(document.querySelector(".box").attributes)
document.querySelector(".box").removeAttribute

document.designMode = "on"

console.log(document.querySelector(".box").dataset)

let div = document.createElement("div");
div.setAttribute("class", "created");
div.innerHTML = "New Div";
div.setAttribute("style","color:red; background-color:green")

document.querySelector(".container").appendChild(div);

console.log(document.querySelector(".created").getAttribute("Style"))


let div2 =document.createElement("p")
div2.setAttribute("class","ram jam am")
div2.innerHTML="Hey I'm a Pargraph inside the div"
div2.setAttribute("style","color:red; background-color:pink")

document.querySelector(".created").appendChild(div2);

console.log(document.querySelector(".ram").getAttribute("Style"))
console.log(document.querySelector(".container").outerHTML)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "<b> okay Now I'm done for today</b>")

//.remove is used to remove elements


//get class names
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".box").classList)
console.log(document.querySelector(".ram").classList)
console.log(document.querySelector(".created").classList)

//add class names
document.querySelector(".created").classList.add("soham")
console.log(document.querySelector(".created").classList)

//remove class
document.querySelector(".created").classList.remove("soham")
console.log(document.querySelector(".created").classList)

//toggel
document.querySelector(".created").classList.toggle("soham")
console.log(document.querySelector(".created").classList)