//'use strict';

// let te = () => console.log(" this is in module ")

// te();
// module.exports = te;

var a = [1,2,3,4,5]
a.splice(1,0,10,20)
console.log(a)
a.shift();
console.log(a)
a.unshift(100);
console.log(a)
a.pop();
console.log(a)

function test(){
    var a ;
    a= 10;
    b = 20;
    console.log(a)
}
test();
console.log(a)
console.log(b)

 
  x = 3.14;
 console.log(x)