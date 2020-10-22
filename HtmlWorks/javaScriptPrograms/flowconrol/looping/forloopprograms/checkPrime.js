var num=7;
var flag=0;
for(i=2;i<=num;i++){
    if(num%i==0){
    flag=1;
        }
    else{
        flag=0;
        
    }
}
if(flag=1){console.log(num+"number is prime");}
else (flag=0){console.log(num+"number is not prime");}