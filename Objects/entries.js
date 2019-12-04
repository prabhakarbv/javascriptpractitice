var Animal = {  
    speak() {  
      console.log(this.name + ' makes');  
    }  
 };  
   
 class Dog {  
    constructor(name) {  
    this.name = name;  
   }  
 }  
   
 Object.setPrototypeOf(Dog.prototype, Animal);   
 // If you do not do this you will get a TypeError when you invoke speak  
 var d = new Dog('people');  
 d.speak();  