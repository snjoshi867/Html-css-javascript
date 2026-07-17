let button = document.getElementById("btn")



button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>OMG what is this !!</b> "
    console.log("Content has been changed")
})

button.addEventListener("dblclick",()=> {
    window.location.href="https://www.google.com"
})
button.addEventListener("keydown",(e)=> {
    console.log(e ,e.key , e.keyCode)
})


