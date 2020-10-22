var data="hai i jai hai i jai jai sam";//jai=4

var wordlist=data.split(" ");


console.log(data);
var object={};
var highest=0;
for(words of wordlist){
    if(words in object){
        object[words]+=1;
    }else{
        object[words]=1;
    }
}console.log(object);

/*maxValueInKey =0
var highestRepeatingKey
for(key in object){
    if (object[key]>maxValueInKey){
        highestRepeatingKey =key;
        maxValueInKey =object[key];
    }
}

console.log("highest repeating is"+" "+highestRepeatingKey);

*/
var
