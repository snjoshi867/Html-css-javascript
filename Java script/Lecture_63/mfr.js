let arr = [1,13,5,7,11]

// let newarr = []

// for (let i=0;i<arr.length;i++){
//     const element = arr[i];
//     newarr.push(element**2)
// }

// console.log(newarr)

let newarr = arr.map((element) => element**2)
console.log(newarr)
const graterThanseven = (e) =>{
    if (e>7){
        return true
    }
    return false
}

let filteredArr = newarr.filter(graterThanseven)
console.log(filteredArr)

newarr.filter(e => e>7).forEach(e => console.log(e))

let arr2 = [1,2,3,4,5]

const red =(a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))

let t = Array.from("hello")
console.log(t)