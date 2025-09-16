// console.log(x)
// let x = 10


// let i = 20

// for(let i = 0;i<10;i++){
//     console.log(i)
// }

// console.log(i)
// console.log(i)


// const PI = 22/7
// console.log(PI)


// let user = {
//     name:"ahmed",
//     age:30
// }

// let {name,age} = user

// console.log(age)
// console.log(user.age)

// let colors = ['red','green','blue']

// let [fcolor,scolor,tcolor] = colors


// console.log(colors[0])


// let text = "hi mohamed"

// let [c1,c2] = text

// console.log(c2)


// let fname = "mohamed"
// let lname = "amr"
// console.log("my first name is : "+fname+"and last name is "+lname)
// console.log(`my f name is : ${fname} and l name is ${lname}`)


// let user = {
//     name:"mohamed",
//     age:30
// }

// for(let u in user){
//     console.log(user[u])
// }

// let colors = ['red','green','blue']

// for(let c of colors){
//     console.log( c)
// }


// let colors = ['red','green','blue']

// let result =  colors.map(function(value){
//     return `<li>${value}</li>`
// })

// console.log(result)

// colors.forEach(function(value){
//     console.log(value)
// })


// let salray = [1000,5000,2500,8000,4000,3000]


// let result = salray.filter(function (value){
//     return value>3000 
// })

// let result = salray.map(function(value){
//     return value*0.9
// })

// console.log(result)


// let sayhi = (name,age) => console.log(`hi`) 
// sayhi("alaa")


// function user(n,a){
//     this.name = n;
//     this.age = a
//     this.getname = function(){
//         console.log(this.name)
//     }
// }
// let u = new user('ahmed',20)
// u.getname()






// function counter(){
//     this.number = 0
//     this.increment = function(){
//         setInterval(function(){
//             this.number++
//             console.log(this.number)
//         },1000)
//     }
// }
// let c = new counter
// c.increment()