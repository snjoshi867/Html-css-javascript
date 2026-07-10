let rand1 = Math.random()

let first, second, third;

if(rand1<0.33){
    first="crazy";
    
}
else if(rand1<0.66 && rand1>=0.33){
    first="amazing";
    
}
else{
    first="fire";   
    

}

let rand2 = Math.random()

if(rand2<0.33){
   second="engine";
}

else if(rand2<0.66 && rand2>=0.33){
    second="foods";
}
else{
    second="garments";
}

let rand3 = Math.random()

if(rand3<0.33){
    third="bros";
}

else if(rand3<0.66 && rand3>=0.33){
    third="limited";
}   

else{
    third="hub";
}

alert(` Rand1 is ${rand1}, Rand2 is ${rand2}, Rand3 is ${rand3}. The name of your company is ${first} ${second} ${third}`)

