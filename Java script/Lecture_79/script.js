let a = prompt("Ente first number")

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    alert("Sorry this is not allowed")
    throw SyntaxError("Sorry this is not allowed")
    
}

let sum = parseInt(a)+ parseInt(b)

let x = 1
try{
  console.log("The sum is ", sum * x)
} catch(error){
    console.log("Error")

}

//Mainly use for functions
finally{
    console.log("files are being closed.")
}



