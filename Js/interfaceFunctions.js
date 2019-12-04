// class encap{
//     constructor(person){
//         this.person = person
//     }

//     myAge(age){
//         this.age = age
//     }
//     getDetails(){
//         console.log(this.person+" "+this.age)
//     }
// }


// let e = new encap("epam")
// e.myAge(10)
// e.getDetails()

function Details(person,age){
    let name = person
    let mYage = age;
    myDetails =() =>{
        console.log(name+" "+age)
    }
    this.myNewDetails =() =>{
        console.log(name+" -> "+age)
    }
}


let personal = new Details("trest",23)
personal.myDetails;
personal.myNewDetails();