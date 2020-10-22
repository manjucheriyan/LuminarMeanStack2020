var data="FBCDAB"
var list=data.split("");

console.log(data);
var obj={};
for(value of data){
    if(value in obj){
     obj[value]+=1;
     if(obj[value]==2){console.log("first repeating value is"+value);
    break;}
    }else{
     obj[value]=1;
    }
}
