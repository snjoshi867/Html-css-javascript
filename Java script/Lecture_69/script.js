console.log("Fctorial of a number :")
a= prompt("Enter a number to find factorial :")
function factorial(a){
    if(a === 0 || a === 1){
        return 1;
    }
    else{
        return a * factorial(a - 1);
    }
}
alert(`The factorial of ${a} is ${factorial(a)}`);