let arr = [1,2,3,5,6,7,8,9,10]


// console.log(arr)
// console.log(arr.length)
// arr[0]=100
// console.log(arr[0])
// console.log(arr[arr.length-1])
// console.log(typeof arr)

// conver to String

console.log(arr.toString())

//Join function
console.log(arr.join(" and "))
//pop function
arr.pop()

console.log(arr)
//push function
arr.push(11)

console.log(arr)

arr.push("hello")

console.log(arr)
//shift function
arr.shift()

console.log(arr)
//unshift function
arr.unshift(0)

console.log(arr)

//concat function

arr2=["ok","hi"]
arr3=arr.concat(arr2)

console.log(arr3)

//slice function

let nums=[1,2,3,4,5]
nums.splice(1,2)
console.log(nums)

nums.splice(0,1,2,3)
console.log(nums)

let a = [1,93,5,6,88]

for (let i = 0 ;i<=a.length-1;i++){
    console.log(a[i])
}

a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})


let obj = {
    a:1,
    b:2,
    c:3
}

for (let key in obj){
    if (obj.hasOwnProperty(key)){
        console.log(key,obj[key])
    }
}

for (const value of a){
    console.log(value)
}