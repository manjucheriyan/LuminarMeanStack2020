var array=[10,12,13,12,12,13];//jai=4


console.log(array);
var count={};
for(num of array){
    if(num in count){
      count[num]+=1;
    }else{
     count[num]=1;
    }
}
console.log(count);
