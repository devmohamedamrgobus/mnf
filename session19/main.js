// xmlhttprequest 
// fetch  ecma next 
// axios react 
// ajax jquery 

// api 

// json 


// var colors = ['red','green','blue',55,true]
// var person = ['mohamed','amr',30]
// var person = {fname:'mohamed',lname:'amr',age:30}
// console.log(person['fname'])
// console.log(person.fname)


var users = [
    {name:"ahmed",age:20},
    {name:"eslam",age:30}
]


// rest api 
// restful api 

// get
// post
// put
// delete 



// crud 
// create
// read
// update
// delete

// users 
// (all users)     https://www.mohamed.com/api/v1/users [get]
//  create user    https://www.mohamed.com/api/v1/users [post]
//  find user      https://www.mohamed.com/api/v1/users/22 [get]
//  udpate user    https://www.mohamed.com/api/v1/users/22 [put]
//  delete user    https://www.mohamed.com/api/v1/users/22 [delete]


// products
// (all users)     https://www.mohamed.com/api/v1/products [get]
//  create user    https://www.mohamed.com/api/v1/products [post]
//  find user      https://www.mohamed.com/api/v1/products/22 [get]
//  udpate user    https://www.mohamed.com/api/v1/products/22 [put]
//  delete user    https://www.mohamed.com/api/v1/products/22 [delete]

// var result = document.getElementById("result")
// // 1 
// var ajax = new XMLHttpRequest

// // 2 

// ajax.open("GET","https://jsonplaceholder.typicode.com/users")

// // 3 
// ajax.send()

// // 4 

// ajax.onreadystatechange = function(){
//     if(ajax.readyState == 4){

//         var data =  JSON.parse(ajax.response)
        
//         for(var i=0;i<data.length;i++){
//             var li = document.createElement("li")
//             li.textContent = data[i].email
//             result.appendChild(li)
//         }

//     }
// }







var btn = document.getElementById("btn")
var search = document.getElementById("search")
var img = document.getElementById("img")
btn.addEventListener("click",function(){

    var ajax = new XMLHttpRequest
    ajax.open("GET","https://api.github.com/users/"+search.value)
    ajax.send()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            var user = JSON.parse(ajax.response)
            console.log(user.avatar_url)
            img.src = user.avatar_url
        }
    }


})


5