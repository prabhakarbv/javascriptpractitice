// // // function CALL APPLY & BIND


// //1. object call with function having 0 parameters
// var i={
//     person :'prabhakar',
//     role : "automation"
// }
// function greet(){
//     var reply =[this.person,' is an answer to this role',this.role];
//     console.log(reply)
//     console.log(i);
//     console.log("*********************** "+this.person)
    
// }
// greet.call(i);  

// // //2. object call with funciton having parameters

// // var obj = {
// //     a : 2
// // }

// // function callFunc (a,b,c){
// //     return this.a+a+b+c;
// // }

// // var c =callFunc.call(obj,1,2,3);
// // console.log(c);

// // //3. OBJECT ALLPY WITH FUNCTION WITH PARAMETERS
// // var obj1 = {
// //     test : 20
// // } 
// // function applyFunc(a,b,c){
// //     return this.test+a+c+b
// // }
// // var t = [1,2,3]
// // console.log(applyFunc.apply(obj1,t));

// // //3. Object BIND with function 

// // var obj2 ={
// //     bi : 1
// // }

// // function bindFunc(a,b,c){
// //     return this.bi+a+b+c;
// // }
// // var ti = [1,200,3]
// // console.log(bindFunc.bind(obj2)(1,2,30));
// // console.log(bindFunc.bind(obj2)(ti));

// let user1 = class {
//     sayHi(){
//         console.log("class expression");
//     }
  
// }
// new user1().sayHi();


var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (var i = 0; i < animals.length+3; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }