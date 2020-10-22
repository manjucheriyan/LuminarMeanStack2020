var i=2;
var limit=50;
var sum=0;
var evensum=0,oddsum=0;
while(i<=limit){
    if(i%2==0)
    { 
        evensum+=i;
    }
    if(i%2!=0)
    { 
        oddsum+=i;
    }
    i++;
    }
    console.log("sum of evennumbers is "+evensum);
    console.log("sum of oddnumbers is "+oddsum);