Write a “person” class to hold all the details.


class Person{

    constructor(name, age, gender, mail){
    
    this.name = name;
    
    this.age = age;
    
    this.gender = gender;
    
    this.mail = mail;
    }
  
    
    getname(){
    
    return `Hello  ${this.name}, iam  ${this.age}, ${this.gender}, ${this.mail}`
    }
}
    var p1 = new Person("Thiru", "18", "male", "thiru@guvi.in");
     console.log(p1.getname());
