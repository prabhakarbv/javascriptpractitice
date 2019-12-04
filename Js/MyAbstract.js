class abstrac_1{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    add_Myage(add){
        this.add = add
    }

    getDetails(){
        return(`my name is : ${this.name} and age is: ${this.age} and my address is :${this.add}`)
    }
}

let t = new abstrac_1("testing",25)
t.add_Myage("hyderbad")
console.log(t.getDetails())