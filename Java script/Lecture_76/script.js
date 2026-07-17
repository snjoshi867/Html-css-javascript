// async function getdata(){
//     // Simulate getting data from the user
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         }, 3500)
//     })

// }
let a = prompt("Enter your ID:")
async function getdata(){
    // Simulate getting data from the user
  let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  let data = await x.json()
  console.log(data)
  if(data.id == a){
    window.location.href="https://www.google.com"
  }
  else{
    console.log("False")
  }
  return 455
}

async function main() {
    console.log("Loading Modules")

console.log("Do something else")

console.log("Load data")
let data = await getdata()

console.log(data)

console.log("process data")

console.log("Task 2")
    
}

main()



// data.then((v)=>{
//     console.log(data)

//     console.log("process data")

//     console.log("Task 2")
// })
