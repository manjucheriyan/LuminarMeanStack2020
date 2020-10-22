//print evenno and odd no in seperate arrays//
var array=[10,11,12,13,14,15,16]

console.log(array);

odd=[];
even=[];
var i=0;
var j=0;
for(num of array){
    if(num%2==0){
        even.push(num);
       console.log(even[i]);
       i=i+1;
      
    }
    else{
        odd.push(num);
        console.log(odd[j]);
        j=j+1;
        
    }
}
console.log(even);
console.log(odd);


