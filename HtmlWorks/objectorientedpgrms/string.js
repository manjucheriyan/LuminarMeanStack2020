string ="HEY"//HEEYYY
var array=string.split("");
console.log(array);
obj={};




var x="manju"
console.log(x+"alen")

obj2={};
nstring="";
arr=[];
position=1;
var nstring2=[];
for(data of array){
    console.log(data+"="+position);  //data-H E//position-1 2
    for(i=0;i<position;i++){ //i=0 `1
       
        nstring=nstring+data;  //nstring=H/HE/HEE/
        nstring2.push(data)
        //console.log(nstring);
    }
 position++;//position 2 3
}
console.log("My new string is "+nstring);
console.log("My new pushed string is "+nstring2);

var newstring=nstring.concat("rttty");
console.log(newstring);
