//anonymous fn
//nameless fn
//no fn keyword,fnname
 /*f1(num1,num2)=>
    return (num1+num2)
console.log(f1);


(num1,num2)=>
    (num1-num2)
console.log();

f3=(num1,num2)=>
    num1%num2)
console.log();
*/
f2=(num1,num2)=>
    num1*num2
console.log(f2(10,3));
f3=(num1)=>num1**3;
console.log(f3(3));


var ar=[1,2,3,4,5];
/*var square=[]
for(num of ar){
    square.push(num*num)
}console.log(square)

*/
var ar=[1,2,3,4,5];
//f2=(num)=> num**2;
//console.log(f2(3))

//mapping
var ar=[1,2,3,4,5];
var squares=ar.map(num=>num**2);
console.log(squares+"hgkjh");


var even=ar.filter(num=>num%2==0);
console.log(even);
//