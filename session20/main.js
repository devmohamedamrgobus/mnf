// var search = document.getElementById("search")
// var btn = document.getElementById("btn")
// var tempresult =  document.getElementById("temp")
// var icnoresult = document.getElementById("icon") 
// btn.addEventListener("click",function(){

//     var ajax = new XMLHttpRequest
//     ajax.open("GET","http://api.weatherapi.com/v1/current.json?key=b627adc120ca4636ad0162946243008&q="+ search.value +"&aqi=no")
//     ajax.send()
//     ajax.onreadystatechange = function(){
//         if(ajax.readyState == 4){
//             var data = JSON.parse(ajax.response)
//             var temp = data.current.temp_c
//             var icon = data.current.condition.icon
//             icon =  icon.replace("//","https://")
//             tempresult.innerText = temp
//             icnoresult.src = icon
//         }
//     }
// })

// alert("hi")
// window.prompt()


// console.log(this)


// var navbar = document.getElementById("navbar")
// var about = document.querySelector(".about")

// onscroll = function(){
//     if(scrollY >= 100){
//       navbar.classList.add("navbar-blue")  
//       navbar.classList.remove("navbar")  
//     }else {
//       navbar.classList.remove("navbar-blue")  
//       navbar.classList.add("navbar")  
//     }

//     if(scrollY >= (about.offsetTop - 500)){
//         about.classList.add("about-show")
//         about.classList.remove("about")

//     }else {
//         about.classList.remove("about-show")
//         about.classList.add("about")

//     }


// }

// sessionstorage
// cookies
// localstorage 
