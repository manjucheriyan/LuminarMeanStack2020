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
  var  obj=new Student(10,"manu",130,"BCA");
    //obj.getstudent();
    var obj1=new Student(11,"sanu",120,"MCA");
    //obj1.getstudent();
    var obj2=new Student(12,"sonu",100,"MA");
    //obj2.getstudent();
    var obj3=new Student(13,"monu",140,"BCA");
    //obj3.getstudent();
    var obj4=new Student(14,"janu",150,"BCA");
    //obj4.getstudent();
    var stu=[];
    stu.push(obj);
    stu.push(obj1);
    stu.push(obj2);
    stu.push(obj3);
    stu.push(obj4);
    
    console.log("..............................");
    //console.log(stu);
    
   //greater total>135
var mark135StudetsArray=[];
   for(key in stu) {
       if((stu[key].totalmarks)>135)
       {
           mark135StudetsArray.push(stu[key]);
       }
   }
for(key in mark135StudetsArray){
    console.log(mark135StudetsArray[key].name+mark135StudetsArray[key].totalmarks+"alen");
}

var mark135StudetsArray=stu.filter(item=>item.totalmarks>135);

for (key in mark135StudetsArray){
    console.log(key.name);
}
console.log("     are the students having mark above 135");

console.log("..............................");
console.log("..............................");






//course=bca
/*for(item of stu) {
    if((item.course)=="BCA"){
 console.log(item.name+":-  course = "+item.course+item.totalmarks);
 

}
}*/
var bcafilter=stu.filter(obj=>obj.course=="BCA");
for(st of bcafilter){
console.log(st.name);
}console.log("are the students who having course BCA ");



//totalmarks of student who is bca

/*var i=0;
var totalmarksbcaarray=[];
totalmarksbca=0;
    for(item of stu) {
        if((item.course)=="BCA"){ 
          
        totalmarksbca+=item.totalmarks;   
        }
    }
    console.log("totalmarks of BCA students:-"+ totalmarksbca);
    
*/
var total=bcafilter.map(obj=>obj.totalmarks).reduce((obj1,obj2)=>obj1+obj2)
console.log("total marks of bca students ="+total)

var highestmark=stu.map(obj=>obj.totalmarks).reduce((obj1,obj2)=>(obj1>obj2)?obj1:obj2);
console.log("highest mark  "+highestmark);
    highestmark={};
    /*for(stud of highestmark){
        stud.getstudent();

    }
    console.log();*/