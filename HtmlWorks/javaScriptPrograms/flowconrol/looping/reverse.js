var num1=123;

var rmndr=0;
var reverse=0,i;
while(num1>0)
{
    

    rmdr=num1%10;//123%10=3//
    num1=Math.floor(num1/10);//123/10=12//
    //num1=num2;
     reverse=(reverse*10)+rmdr;
}
console.log(reverse);
