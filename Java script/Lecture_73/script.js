function creatCard(title,cName,views,monthsOld,duration,thumbnail){
    let viewstr
    if(views<1000000){
          viewstr=views/1000 + "K"
    }
    else if (views>1000000){
         viewstr=views/1000000 + "M"
    }
    else{
        viewstr=views/1000 + "K"
    }
   
    let html =`<div class="card">
            <div class="image">
                <img src="${thumbnail}">
                <div class = "capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName}. ${viewstr} views . ${monthsOld} monts ago</p>
            </div>

        </div>`
    
 document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}

creatCard("Introduction to backend | sigma web dev ", "Code with mohan" , 560000, 7,"31:32", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4pqAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwWOixJVrKLFindK92kYMgTcQbw")
creatCard("Introduction to backend | sigma web dev ", "Code with mohan" , 560000, 7,"31:32", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4pqAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwWOixJVrKLFindK92kYMgTcQbw")
creatCard("Introduction to backend | sigma web dev ", "Code with mohan" , 560000, 7,"31:32", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4pqAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwWOixJVrKLFindK92kYMgTcQbw")