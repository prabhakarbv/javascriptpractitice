// // let emp = new Object();
// // emp.name ="prabha",
// // emp.id = 1234,
// // emp.sal = 40

// // console.log(emp.name,emp.id,emp.sal)


// // const obj1 = {
// //     a:1,
// //     b:2
// // }

// // const obj2 = Object.assign(obj1,{b:4,c:5})
// // console.log(obj2)


// // const people ={
// //     printIntro:function(){
// //         console.log(` my name is "${this.name}" and age ${this.age}`)
// //     }
// // }

// // const me = Object.create(people)
// // me.name = "prabhakar"
// // me.age = 24
// // console.log(me.printIntro())

// // function fruits() {  
// //     this.name = 'franco';  
// //     }  
// //    function fun() {  
// //     fruits.call(this)  
// // }  

// //     fun.prototype = Object.create(fruits.prototype);  
// //     const app = new fun();  
// //     console.log(app.name);  

// // function fruits() {  
// //     this.name = 'fruit';  
// //     this.season = 'Winter';  
// //     }  

// //     function apple() {  
// //     fruits.call(this);  
// //     }  

// //     //apple.prototype = Object.create(fruits.prototype);  
// //     const app = new apple();  
// //     console.log(app.name,app.season);  
// //     console.log(app.season); 




// // //Declaring class
// // class Employee
// //   {
// // //Initializing an object
// //     constructor(id,name)
// //     {
// //       this.id=id;
// //       this.name=name;
// //     }
// //     detail()
// //     {
// //        console.log(this.id+" "+this.name+"<br>")
// //     }
// //   }

// //   var e1=new Employee(101,"Martin Roy");
// // var e2=new Employee(102,"Duke William");
// // e1.detail(); //calling method
// // e2.detail();

// // class A{
// //     // display(age){
// //     //     console.log("in A "+age)
// //     // }
// //     // display(age){
// //     //     console.log("in A1 "+age)
// //     // }
// //     display(age,t){
// //         console.log("in A2 "+age+" "+t)
// //     }
// //     display(age){
// //         console.log("in A1 "+age)
// //     }
// // }
// // class B extends A{
// //     display1(age){
// //         console.log("in B "+age+" +")
// //     }
// // }

// const a = new B();
// a.display(25)
// a.display(25,"test")
// "use strict";    
// var x=10;    
// console.log(x);   



// // var promise = new Promise(function(resolve, reject) { 
// //     throw new error("it is failed")
// // }) 
  
// // promise 
// //     .then(function(successMessage) { 
// //        //success handler function is invoked 
// //         console.log(successMessage); 
// //     }).catch(function(errorMessage) { 
// //         console.log("Error  "+errorMessage); 
// //     })

// // const wait = time => new Promise((resolve) => setTimeout(resolve, time));

// // wait(3000).then(() => console.log('Hello!')); // 'Hello!'






const p1 = Promise.resolve(21);
const p4 = "testing"
const p5 = "testing"
const p6 = "testing"
const p7 = "testing"
const p2 = 110470116021;
const p3 = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
        resolve('AppDividend');
    }, 1000);
});

Promise.all([p1, p2, p3,p4,p5,p6,p7]).then(values => { 
    console.log(values);
});