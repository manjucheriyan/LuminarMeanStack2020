class Student{
    constructor(rollno,name,totalmarks,course){
    this.rollno=rollno;
    this.name=name;
    this.totalmarks=totalmarks;
    this.course=course;
    }
    getstudent=()=>{
         console.log(this.rollno);
         console.log(this.name);
         console.log(this.totalmarks);
         console.log(this.course);
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
    studentArray.push(obj);;


//que3.........................all details of persons whose names starting with m
resultArray=[];
console.log("oldnames");
for(key in studentArray){                       
     object=studentArray[key];      
     objectName=object.name;
    resultArray.push(objectName);
}

var resultArray=studentArray.map(obj=>obj.name);


console.log("new names............");
for(key in resultArray)
{
   console.log(resultArray[key]);
}