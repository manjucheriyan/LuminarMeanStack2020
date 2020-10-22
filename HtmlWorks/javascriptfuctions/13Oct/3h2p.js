//sample input:-HHHPPSDAAA
//exp output:-3H2P1S1D3A

inpstring="HHHHPPSDAAA";//3H2P1S1D3A
var splitArray=inpstring.split("");
console.log(splitArray);
keyValuePairObject={}
var opstring="";
var oparray=[];
var i=0;

var arrayWithoutDuplicates = [];
for (var i in splitArray){
    console.log(i)
    if(arrayWithoutDuplicates.indexOf(splitArray[i]) == -1){ ///x2 =H,T
        arrayWithoutDuplicates.push(splitArray[i])
    }
}

console.log(arrayWithoutDuplicates)




//var temparray=["H","P"];

for(temp of arrayWithoutDuplicates)
{
//var temp="H";
count=0;
for (data of array){  //h
  if(data==temp){
    count+=1;
  }   
}
console.log(temp+"="+count);
keyValuePairObject[temp]=count;
}








resstring="";                                       //
for(data in keyValuePairObject){                    //H     P   S
  
  resstring=resstring+keyValuePairObject[data]+data;              //3H   2P   1S
}
console.log(resstring);                       






/*

console.log(".............................");
console.log(".............................");
console.log(".............................");

*/
