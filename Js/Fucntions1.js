// test();
// function test(){
//     console.log("function declaration");
// }
// test();

// //notTest();
// var notTest = function(){
//     console.log("funciton expression");
// }
// notTest();
// console.log('square is '+sqare(4));
// function sqare(r){
//     return r*r;
// }

function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    return function getFullName() {
        return function getFullName1() {
             firstName + " " + lastName;
        }
         firstName + " " + lastName;
    }
  
    return ( "Hello, " + getFullName() +" "+ "Bye, " + getFullName() );
  
  }

  console.log(sayHiBye(1,2))