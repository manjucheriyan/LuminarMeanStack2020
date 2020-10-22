class Employee{
    constructor(eid,ename){
        this.eid=eid;
        this.ename=ename;
    }
    getEmployee(){
        console.log("eid="+this.eid);
        console.log("ename="+this.ename);
    }
}
class MyClass extends Employee{};
var obj=new Employee(12532,"manju");
obj=getEmployee

console.log(MyClass.getPerson);