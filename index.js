// part : 1

// Task : 1

// let person = {
//   name : "Ganesh",
//   sayHello : function(){
//   console.log(`Hello ${this.name} !`)
//   }
// }

// console.log(person.sayHello())


// Task : 2

// let calculator = {
//   value : 10,
//   add : function(){
//     console.log((this.value)+5)
//   },
//   sub : ()=>{
//     console.log(calculator.value-5)  // for arrow function this keyword doesn't works. 
//   }
// }

// console.log(calculator.add());
// console.log(calculator.sub()); // it shows an error, to overcome this we have to use direct key name (or) regular function.

// Task : 3


// let div = document.querySelector(".div1")
// let btn = document.createElement("button")
// btn.innerText = "Click Me"
// div.appendChild(btn)
 
// btn.addEventListener("click",function(){     // it shows the html button tag 
//   console.log(this)
// })
// btn.addEventListener("click",()=>{         // it shows the window object
//   console.log(this)
// })


// part -2

// task : 4

// let car = {
//   startEngine : function(){
//     console.log(`Starting the engine of ${this.brand}`)
//   }
// }

// let bike = {
//   brand : "Honda"
// }

// console.log(car.startEngine.call(bike))

// task :5

// let mathOperations = {
//   sum : function(c,d){
//      console.log((this.a)+(this.b)+c+d)
//   }
// }

// let arr = {
//   a:5,
//   b:10,
// };
// console.log(mathOperations.sum.apply(arr,[10,15]))

// task : 6

// let counter = {
//   count : 0,
//   increment : function(){
//    this.count++;
//     console.log(this.count);
//   }
// }
// let bind = counter.increment.bind(counter)
// console.log(bind())
// console.log(bind())
// console.log(bind())

// part : 3


// task 7

// let timer = {
// name : "game",
// start : function(){
// setTimeout(()=>{
// console.log(` ${this.name} started!`)
// },2000)
// }
// }
// // console.log(timer.start())
// let print = timer.start.bind(timer);

// print();

// task 8

// let rectangle = {
//   length : 10,
//   width : 10
// }
// let circle = {
//   radius : 10,
//   pi : 3.14
// }

// function areaOfRectangle(l,b){
// console.log(`area of rectangle ${l*b}`)
// }

// function areaOfCircle(r,p){
//   console.log(`area of rectangle ${r*p}`)
//   }


//  areaOfRectangle.call(areaOfRectangle,rectangle.length,rectangle.width)
//  areaOfCircle.call(areaOfCircle,circle.radius,circle.pi)