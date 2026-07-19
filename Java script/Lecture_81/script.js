   let text = ["Initializing Hacking","Reading your Files","Password files Detected","Sending all passwords and personal files to server","Cleaning up"]

const additem = async (item)=>{
    await randomdelay()
    let div = document.createElement("div")
    div.innerHTML = item
    document.body.append(div)
}
const randomdelay = ()=>{
    return new Promise((resolve,reject)=>{
        timeout= 1+ 6*Math.random()
        setTimeout(()=>{
            resolve()
        }, timeout*1000)
    })
}
async function main(){
 
setInterval(()=>{
    let last = document.body.lastElementChild
    if(last.innerHTML.endsWith("...")){
         last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
    }
    else{
    last.innerHTML = last.innerHTML + "."
    }
},700)

for(const item of text){
    await additem(item)
}

}

main()
