//// Objct with function
// let MyObject = {
//     fname : "test",
//     lname : "automation",
//     mYfunction : () =>{
//         return (` I am in ${MyObject.fname} ${MyObject.lname}`)
//     },
//     Mobile : {
//         cell : "123654",
//         Land : "456321"
//     }
// }

// console.log(MyObject.mYfunction());
// console.log(MyObject.Mobile.cell)

// // Object constructor

// function personTest(name,age){
//     this.name = name;
//     this.age = age;
// }

// let test1 = new personTest("prabahkar", 23);
// console.table(test1);

////class with constructor
// class test2{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     printA() {
//         console.log(this.name+"  "+this.age);
//     }
// }

// let A = new test2("testing",234);
// A.printA();

// var gt = {}
// gt.a = "test";
// gt.b = "auto"
// gt["a"] = "test1"

// console.log(gt.a)


//// with Object create
let obj = {
    isTrue : false,
    practice : function(){
        return (` this is ${this.isTrue} that my name is ${this.name}`)
    }
}

const te = Object.create(obj)
te.isTrue = true
te.name = "testing"
console.log(te.practice());

// function person(fname,lname){ 
//     let firstname = fname; 
//     let lastname = lname; 
  
//     let getDetails_noaccess = function(){ 
//         return (`First name is: ${firstname} Last  
//             name is: ${lastname}`); 
//     } 
  
//     this.getDetails_access = function(){ 
//         return (`First name is: ${firstname}, Last  
//             name is: ${lastname}`); 
//     } 
// } 
// let person1 = new person('Mukul','Latiyan'); 
// console.log(person1.firstname); 
// console.log(person1.getDetails_noaccess); 
// console.log(person1.getDetails_access()); 