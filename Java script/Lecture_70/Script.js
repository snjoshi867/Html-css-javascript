let x = document.body.firstElementChild.children

let rand = Math.random()

if (rand>0.5){
    x[0].style.backgroundColor = "red"
}
else{
    x[0].style.backgroundColor = "blue"
}

let rand1 = Math.random()

if (rand1>0.1){
    x[1].style.backgroundColor = "pink"
}
else{
    x[1].style.backgroundColor = "yellow"
}
let rand2 = Math.random()

if (rand2>0.5){
    x[2].style.backgroundColor = "orange"
}
else{
    x[2].style.backgroundColor = "black"
}
let rand3 = Math.random()

if (rand3>0.1){
    x[3].style.backgroundColor = "green"
}
else{
    x[3].style.backgroundColor = "silver"
}
let rand4 = Math.random()

if (rand4>0.1){
    x[4].style.backgroundColor = "lavender"
}
else{
    x[4].style.backgroundColor = "coral"
}

alert(`rand is ${rand} ,rand1 is ${rand1} ,rand2 is ${rand2} ,rand3 is ${rand3} ,rand4 is ${rand4}`)

