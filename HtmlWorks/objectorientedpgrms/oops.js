class Person{
    setPerson(naime,aige){
        this.age=aige;
        this.name=naime;
    }
    getPerson(){
        console.log("name="+this.name);
        console.log("age="+this.age);
    }
}
var obj=new Person();
obj.setPerson("manju",27);
obj.getPerson();



var obj1=new Person();
obj1.setPerson("alen",32);
obj1.getPerson();