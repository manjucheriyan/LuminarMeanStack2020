var array=[1,2,3,4,5,6];
for(let i of array){
    console.log(i);
}
console.log("..........................");
console.log("internal iteration");
array.forEach(num=>console.log(num+1));