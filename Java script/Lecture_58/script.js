function hello(name) {
    console.log("helloo " + name)
}


hello("Alice")
hello("Bob")

function add(a, b,c=9) {
    return a + b + c;
}

let result = add(8,10);
console.log(result);
