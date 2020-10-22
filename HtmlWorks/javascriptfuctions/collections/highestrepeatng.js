var data="hai i jai hai i jai jai jai";//jai=4

var wordlist=data.split(" ");
console.log(data);
var object={};
for(words of wordlist){
    object[words]=0;
}
console.log(object);


for(keys in object){
    for(words of wordlist){
        if (keys==words){
            object[keys]=object[keys]+1
        }
    }
}
console.log(object);

max =0
var highest
for(key in object){
    if (object[key]>max){
        highest =key;
    }
}

console.log(highest);
