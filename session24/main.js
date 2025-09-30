// module 

// function hi(){
// }
// let x = new hi()
// console.log(x)



// let user = {name:"ahmed",age:24}
// let user2 = {name:"eslam",age:20}
// let user3 = {age:55}


// function user(n,a){
//     this.name = n;
//     this.age = a;
// }

// let user1 = new user("ahmed",20)
// let user2 = new user()

// console.log(user2)


// let ajax = new XMLHttpRequest

// console.log(ajax)


// function user(n,a){
//     this.name = n;
//     this.age = a;
//     this.number  =0;
//     this.increment = function(){
//        setInterval(()=>{
//         this.number++
//         console.log(this.number)
//        },1000)
//     }
// }

// class user {
//     number = 0
//    constructor(n,a){
//         this.name = n;
//         this.age = a;
//    }
//    increment=()=>{
//         setInterval(() => {
//             this.number++
//             console.log(this.number)
//         }, 1000);
//    }
// }

// let u = new user("eslam",20)
// u.increment()



// let x = new user("mohamed",20)
// x.increment()



// Array.forEach(()=>{

// })




// class calc 
//  x 
//  y 
//  op
// 


// let c = new calc(10,20,"*")


// class calc {
//     constructor(x,y,o){
//         this.x = x;
//         this.y = y;
//         this.o = o;
//     }

//     result = () =>{
//         switch(this.o){
//             case "+":
//                 console.log(this.x+this.y)
//             break;
//               case "-":
//                 console.log(this.x-this.y)
//             break;
//               case "*":
//                 console.log(this.x*this.y)
//             break;
//               case "/":
//                 console.log(this.x/this.y)
//             break;
//         }
//     }
// }


// let c = new calc(20,5,"-")
// c.result()

// promise 


// console.log("test 1")

// console.log("test 2")

// console.log("test 3")

// console.log("test 1")

// setTimeout(()=>{
//     console.log("test 2")  // waiting 
//     console.log("test 3")
//     console.log("test 4")
// },2000)



// console.log("test 1")


// setTimeout(()=>{
//     console.log("test 2")
// },2000)

// console.log("test 3")
// console.log("test 4")
let ul = document.getElementById("result")
let items = ["item1","item2"]

// function add(callback){
//     setTimeout(()=>{
//         items.push("item3")
//         callback()
//     },2000)
// }

// function show(){
//      setTimeout(()=>{
//         let res = ""
//         items.forEach((value)=>{
//             res += `<li>${value}</li>`
//         })
//         ul.innerHTML = res
//         console.log(res)
//     },1000)
// }


// add(show) // 2
 // 1



//  function add(){
//     return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         items.push("item3")
//         res()
//     },2000)
//     })
// }

// function show(){
//      setTimeout(()=>{
//         let res = ""
//         items.forEach((value)=>{
//             res += `<li>${value}</li>`
//         })
//         ul.innerHTML = res
//     },1000)
// }


// add().then(show)

function jsondata(data){
   return  data.json()
}

function result(res){
    console.log(res)
}


fetch("https://jsonplaceholder.typicode.com/users")
.then(jsondata)
.then(result)