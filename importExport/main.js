// // 'use strict';
// import {sayHi, sayBye} from 'say';

// sayHi('John'); // Hello, John!
// sayBye('John'); // Bye, John!


let test = function(a,b){
    this.name = (a,b)=>a+b;

}


let t = new test();
console.log(t.name(2,3))