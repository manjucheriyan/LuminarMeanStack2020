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
//console.log(studentArray);


//question1.................................................................................
var arrayStartingNames=[];
var resultString="";
var objectname;
for(key in studentArray){
    object=studentArray[key];
    objectName=object.name;
    firstCharacter=objectName.substr(0,1);
    if(firstCharacter=="m"){
        resultString+=objectName;
        
    }
}
//console.log(resultString);

//question2....................namesstartingwith m =>need total marks of them
var arrayStartingNames=[];
var resultString="";
var objectname;
totalMarksSum=0;
for(key in studentArray){
    object=studentArray[key];
    objectName=object.name;
    objectMark=object.totalmarks;
    
    firstCharacter=objectName.substr(0,1);
    if(firstCharacter=="m"){
        totalMarksSum+=objectMark;
    }
}
//console.log(totalMarksSum);


//que3.........................all details of persons whose names starting with m
resultarray=[];
for(key in studentArray){                       
    object=studentArray[key];
    
    
     objectName=object.name;
     //console.log("objectName ="+ objectName);
     firstCharacter=objectName.substr(0,1);
     //console.log("firstCharacter"+firstCharacter);
     

     if(firstCharacter=="m"){
        resultarray.push(object);
        //console.log("resultarray");
        
         
}

}


for(key in resultarray)
{
console.log(resultarray[key]);
}



//question4...............................BCA Students name..................................................
console.log("Question4");

var resultarray=[];
for(key in studentArray){
    object=studentArray[key];
    objectCourse=object.course;
    if(objectCourse=="BCA"){
        resultarray.push(object);
        
    }
}

var resultarray=studentArray.filter(x=>x.course=="BCA");

for(key in resultarray)
{
    object=resultarray[key];
    console.log(object.name);
}