// Class

/* whenever you called a function using a new operator, the function returned a new object. Therefore, the function was acting as a class and known as a constructor. This way of calling a function to return an object is also known as the Constructor Invocation Pattern. */

/* class testClass {
  
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
  
     getInfo() {
         console.log(this.name + " age : " + this.age);
         return true;
     }
 }

 var classObj = new testClass("John", 10);
 console.log(classObj.getInfo()); */



//  Class Statement and Expression:

// Expresssion

var testClass = class {
  
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
  
     getInfo() {
         console.log(this.name + " age : " + this.age);
         return true;
     }
 };
/*
 An unnamed class expression can be created as shown above. The name given to the class expression is local to the class body.  */

 var testClass = class aName{
    static test(){
        return "ASHOK";
    }
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
  
     getInfo() {
         console.log(this.name + " age : " + this.age);
         return true;
     }
 };
 var test = new testClass("John", 10);
 test.getInfo();

//  Hoisting of class
/* 
class declaration does not get hoisted to the top of the execution context */

// Static KeyWord

//No need to create instance of class

class Car {
  static count() {
      console.log("I am static method");
  }

}

Car.count();
Car.count();

//Class Inheritence

class info {
    
    constructor(name, age) {
        name = name;
        age = age;
    }

    getInfo() {
        console.log(this.name + " age : " + this.age);
        return true;
    }
}
class personal extends info {
    
    constructor(name, age, sex) {
        super(name, age);
        sex = sex;
    }
    getInfo() {
        console.log("name is " + this.name + " age : " + this.age);
        console.log("Sex "+this.sex);
        return true;
    }
}
  
   var classObj = new personal("John", 10, "male");
   console.log(classObj.getInfo()); 