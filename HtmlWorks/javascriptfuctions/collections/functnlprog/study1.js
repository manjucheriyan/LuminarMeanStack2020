var array=["manju","alen","iane","aity","awety"];
var astartarray=[];
for(key in array){
    keyvalue=array[key];
    firstchar=keyvalue.substr(0,1)
    if(firstchar=="a"){
        astartarray.push(keyvalue);
    }
}
console.log(astartarray);
result="";
for(key in astartarray){
    result=result+astartarray[key]
}
console.log(result);



var array=["manju","alen","iane","aity","awety"];
var newString=""
var astartarray=[];
for(key in array){
    keyvalue=array[key];
    firstchar=keyvalue.substr(0,1)
    if(firstchar=="a"){
        newString = newString+keyvalue
    }
}
console.log(newString);


var array=["manju","alen","iane","aity","awety"];
var newString=""
var astartarray=[];
for(value of array){
    keyvalue=value;
    firstchar=keyvalue.substr(0,1)
    if(firstchar=="a"){
        newString = newString+keyvalue
    }
}
console.log(newString);

