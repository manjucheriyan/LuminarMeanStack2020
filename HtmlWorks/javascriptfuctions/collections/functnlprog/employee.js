//create employee class id,name,salary.designatn,
  //print highest salary employeee info
  //print lowest salary employee info
  //print salary in sorted order
  class Employee{
    constructor(eid,ename,design,salary,join,resign){
    this.eid=eid;
    this.ename=ename;
    this.design=design;
    this.salary=salary;
    this.join=join;
    this.resign=resign;
    }
    getemployee=()=>{
         console.log(this.eid);
         console.log(this.ename);
         console.log(this.design);
         console.log(this.salary);
         console.log(this.join);
         console.log(this.resign=resign);
    }
}
var emp=[];
    
    var  obj=new Employee(10,"ajay","developer",15000,1981,2003);
   emp.push(obj);
    var obj=new Employee(11,"vijay","developer",20000,1992,2008);
    emp.push(obj);
    var obj=new Employee(12,"bijoy","developer",25000,1999,2007);
    emp.push(obj);
    var obj=new Employee(13,"jhon","BA",10000,1989,2010);
    emp.push(obj);
    var obj=new Employee(14,"danie","QA",10000,2009,2014);
    emp.push(obj);
    var obj=new Employee(15,"lari","QA",10000,1987,2010);
    emp.push(obj);
   
//onsole.log(emp);


    //salary highest person
  highestSalary=0;
    for(key in emp) {
      object=emp[key];
      objectSalary=object.salary;
      
      if(objectSalary>highestSalary){
        highestSalary=objectSalary;
        highestSalaryPerson=object.ename;
      }
    }console.log("highestSalary="+highestSalary+"  got by  "+highestSalaryPerson+"   without arrow fn");

    //console.log("..........................");
    console.log("..........................");
    

    var resultObject = emp.map(item => item.salary);
console.log ("salary array.........................................................................");
console.log (resultObject);
console.log ("highest salary.......................................................................");
var highestsalary=resultObject.reduce((valueFromArray,returnValue)=>valueFromArray<returnValue?valueFromArray=returnValue:valueFromArray);
console.log (highestsalary+"with arrow function");

console.log("..........................");




//salary lowest person
firstobj=emp[0];
LowestSalary=firstobj.salary;
console.log(LowestSalary+"jfjsdfh");
for(key in emp) {
  object=emp[key];
  objectSalary=object.salary;
  var LowestSalaryPerson;
  if(objectSalary<LowestSalary){
    LowestSalary=objectSalary;
    LowestSalaryPerson=object.ename;
  }
}console.log("Lowest salary="+LowestSalary+"    got by    "+LowestSalaryPerson+"  without arrow fn");


console.log("..........................");
console.log("..........................");

//salary in sorted order
var salaryArray=[];
for(key in emp){
  object=emp[key];
  objectSalary=object.salary;
    salaryArray.push(objectSalary);
  

}
opsalaryArray=salaryArray.sort((a, b) => a - b);
for(key in opsalaryArray){
  value=opsalaryArray[key];
  console.log(value);
}



//print all employee name and designation only

var empNameDesignArray=emp.map(item=>item.ename+"   is a  "+item.design);
console.log("print all employee name and designation only");
console.log(empNameDesignArray);

//print all employee names whose designation equal to developor
console.log("print all employee names whose designation equal to developor");
var DesignationIsDeveloperArray=[];
var DesignationIsDeveloperArray=emp.filter(item=>item.design=="developer");

var developerArray = DesignationIsDeveloperArray.map(objectStudent => objectStudent.ename);
for(key in developerArray ){
    employeeNames=developerArray[key];
    console.log(employeeNames);
}

