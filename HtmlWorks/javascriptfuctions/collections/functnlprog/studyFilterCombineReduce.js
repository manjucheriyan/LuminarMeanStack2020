class Student{
    constructor(rollno,name,marks,course){
    this.rollno=rollno;
    this.name=name;
    this.marks=marks;
    this.course=course;
    }
}

var studentArray=[];
var  obj=new Student(10,"manu",130,"BCA");
studentArray.push(obj);
var obj=new Student(11,"sanu",120,"MCA");
studentArray.push(obj);
var obj=new Student(12,"sonu",100,"MA");
studentArray.push(obj);
var obj=new Student(13,"monu",140,"BCA");
studentArray.push(obj);
var obj=new Student(14,"janu",150,"BCA");
studentArray.push(obj);

var resultFilter = studentArray.filter(objectStudent => objectStudent.course == "BCA");
console.log ("Filter Output.........................................................................");
console.log (resultFilter);

var resultMap =  resultFilter.map(objectStudent => objectStudent.marks);
console.log ("Map Output.........................................................................");
console.log (resultMap);

var totalMarks = resultMap.reduce((tempVariableForSum,valueFromCollection)=>tempVariableForSum+valueFromCollection)
console.log ("Reduce Output.........................................................................");
console.log (totalMarks);

// Reduce Maps

var combinedTotalMarks = studentArray.filter(objectStudent => objectStudent.course === "BCA").map(objectStudent => objectStudent.marks).reduce(function (tempVariableForSum, valueFromCollection) {
  return tempVariableForSum + valueFromCollection;
}, 0);
console.log ("Combined Output.........................................................................");
console.log (combinedTotalMarks);


//Very Simple Method

var totalMarkInSimpleMethod = studentArray.reduce((acc, student) => student.course ==="BCA" ? acc + student.marks : acc, 0);
console.log ("Output in Simple Method, only 1 Reduce.........................................................................");
console.log (totalMarkInSimpleMethod);