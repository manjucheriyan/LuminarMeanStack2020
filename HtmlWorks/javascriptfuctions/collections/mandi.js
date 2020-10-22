/*var strData="hai i jai hai i jai jai jai";//jai=4

var arrayWordlist=strData.split(" ");

console.log(arrayWordlist);

for(i=0;i<arrayWordlist.length;i++){
    if(arrayWordlist[i]=="hai"){
        arrayWordlist[i]="Manju" 
    }
}

console.log(arrayWordlist);
*/
/*
var strData="hai i jai hai i jai jai jai";//jai=4
var arrayWordlist=strData.split(" ");
var count=0;
console.log(arrayWordlist);
for(value of arrayWordlist){
    if(value=="jai"){
        count+=1;
    }
}
console.log(count);
*/

var data={hai:2,i:2,jai:4};
data["koi"]=6;
data["jai"]=9;
console.log(data);
console.log(data["jai"]);
for(words in data){
    console.log(words);
}
for(key in data){
    console.log(data[key]);

}





