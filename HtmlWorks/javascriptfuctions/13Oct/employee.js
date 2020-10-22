//create employee class id,name,salary.designatn,
  //print highest salary employeee info
  //print lowest salary employee info
  //print salary in sorted order
  class Employee{
    constructor(eid,ename,design,salary){
    this.eid=eid;
    this.ename=ename;
    this.design=design;
    this.salary=salary;
    }
    getemployee=()=>{
         console.log(this.eid);
         console.log(this.ename);
         console.log(this.design);
         console.log(this.salary);
    }
}
  var  obj=new Employee(10,"manu","intern",15000);
    //obj.getemployee();
    var obj1=new Employee(11,"alen","trainee",60000);
    //obj1.getemployee();
    var obj2=new Employee(12,"jain","developer",25000);
   // obj2.getemployee();
    var obj3=new Employee(13,"tia","tester",30000);
   // obj3.getemployee();
    var emp=[];
    emp.push(obj);
    emp.push(obj1);
    emp.push(obj2);
    emp.push(obj3);
console.log(emp);






//highest salary employee

//var salaryemp=emp.filter(obj=>obj.totalmarks=30000);
var highestSalary=0; 
var highestSalaryperson; 
for (em of emp){  
    if(em.salary>highestSalary){
      highestSalary=em.salary;
      highestSalaryperson=em.ename;
    }
}console.log(highestSalaryperson+" is getting highest salary:-"+highestSalary);




var student=stu.filter(item=>item.totalmarks>135);
for (st of student){
    console.log(st.name);
}








console.log(".............................");
console.log(".............................");
  //inp=[1,2,3,4,5] <5=>+1  >5=>-1 output=
  var ar=[1,2,3,4,5,9];
  var result=ar.map(num=>(num<5)?(num+1):(num>5)?(num-1):num);
  console.log(result);


  