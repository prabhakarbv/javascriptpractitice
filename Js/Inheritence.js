class Parent{
    constructor(name){
        this.name = name
    }
    toString(){
        console.log(this.name)
    }
}

class child extends Parent{
    constructor(name,id){
        super(name);
        this.id = id;
    }
    toString(){
        console.log(this.name+"  "+this.id)
    }
}

var parent = new child("prabha",34)
parent.toString();