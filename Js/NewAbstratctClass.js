function  abstra() {
    var name = "java"
    var lname = "script"
    var test = function (){
        console.log(name)
    }
    this.test1 = function (){
        console.log(name)
    }
}

let per = new abstra();
per.test1();