var array=[0,1,2,3,4,5,6]
var input=5;
flag=0;
for(num of array){
    
    if(num==input){
        flag=1;
        break;
    }
}
        if(flag==1){
            console.log("searching element: "+input);}
        else {
            console.log("not found"); 
         }