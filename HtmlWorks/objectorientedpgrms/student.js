class Student{
    static get collagenaime(){
        var collage_name="LUMINAR";
        return collage_name;
    }
    static printCollagenaime(){
        var collage_name="LUMINAR";
        console.log(collage_name);
    }
    setPerson(rol,naime,corse,totel){
        this.roll=rol;
        this.name=naime;
        this.course=corse;
        this.total=totel;
    }
    getPerson(){
        console.log("rollno="+this.roll);
        console.log("name="+this.name);
        console.log("course="+this.course);
        console.log("total="+this.total);
        Student.printCollagenaime();
    }
}
class MyClass extends Student{};
var obj=new Student();
obj.setPerson(1,"manju","meanstack",250);
obj.getPerson();
console.log(MyClass.collage_name);


var obj1=new Student();
obj1.setPerson(2,"sanju","fullstack",3000);
obj1.getPerson();
