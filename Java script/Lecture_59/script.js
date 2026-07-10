let random = Math.random()
let a=prompt("Enter the first number");
let b=prompt("Enter the second number");
let c=prompt("Enter the third number");

let obj ={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}

alert(`The random number is ${random}`)


if (random < 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c= obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
