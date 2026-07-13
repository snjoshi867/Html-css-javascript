console.log("Hello world")

console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[0])
console.log(document.body.childNodes[1].childNodes[1])

let cont = document.body.childNodes[1]
console.log(cont)
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)

cont.lastElementChild.style.backgroundColor = "red";
cont.lastElementChild.style.color = "green";

console.log(cont.lastElementChild.parentElement)

console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[0])

console.log(document.body.firstElementChild.children[3])
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)


console.log(document.body.children[1])
console.log(document.body.children[1].rows)