//find out least postve integer
var array=[-1,0,1,2,3,4,5]
var temp=1;

for(num1 of array){
   for(num2 of array){

        if(temp<num1){
            temp=num1;
            
        }
    }
}console.log(temp+1);