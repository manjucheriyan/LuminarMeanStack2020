/*//convert to uppercase
var names=["manu","anu","janu","sonu","anju"]
var upper=names.map(name=>name.toUpperCase());
console.log(upper);
//fetch a---- names
var fetch=names.filter(name=>name[0]=="j");
console.log(fetch);*/
//reducing..
var array=[1,2,4,5,8,9];
var total=array.reduce((num1,num2)=>num1+num2);
console.log(total);
//
var highest=array.reduce((num1,num2)=>num1>num2?num1:num2);//terinary operator
console.log(highest);