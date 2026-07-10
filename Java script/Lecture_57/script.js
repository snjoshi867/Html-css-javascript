console.log("Loops in JavaScript");

let age = 1;

for(let i=1;i<=10;i++){
    console.log(i);
}

let a=[1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

let obj ={
    name: "John",
    age: 30,
}
 for (let key in obj){
    console.log(key, obj[key]);
 }

 for (let value of "Hello"){
    console.log(value);
 }
 
 let i = 5;
 while(i>0){
    console.log(i);
    i--;
 }

 let m = 0;
 do{
    console.log(m);
    m++;
 } while(m<5);