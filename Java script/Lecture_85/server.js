console.log("Hello")

var slugify = require(`slugify`)

let a = slugify(`some strings`)
console.log(a)

const b = slugify(`some srtings`, `$$$`)
console.log(b)