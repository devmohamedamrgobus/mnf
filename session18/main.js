// var result = document.querySelector("#result")
// var result2 = document.querySelector("#result2")

// var show = document.getElementById("show")
// show.onclick = function(){
//     result.innerText = "hi mohamed"  
// }

// show.onclick = function(){
//     result2.innerText = "hi ahmed"
// }

// show.addEventListener("click",function(){
//   result.innerText = "hi mohamed"  
// })


// show.addEventListener("click",function(){
//   result2.innerText = "hi ahmed"  
// })


// var box = document.getElementById("box")


// var h1 =   document.createElement("h1")
// // console.log(h1.inn)
// h1.textContent = "hi eyouth".
// h1.className = "testclass"
// box.appendChild(h1)

var add = document.getElementById("add")
var task = document.getElementById("task")
var result = document.getElementById("result")
add.addEventListener("click",function(){
   if(task.value.length > 0){
        
        task.classList.remove("red")
        var li = document.createElement("li")
        li.textContent = task.value
        result.appendChild(li)  
        task.value = "" 
   }else {
    task.classList.add("red")
   }
   
})

task.addEventListener("keyup",function(){
    if(task.value.length == 0){
        task.classList.add("red")
    }else {
        task.classList.remove("red")
    }
})