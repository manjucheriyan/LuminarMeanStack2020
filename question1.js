//not completed
//write program to find triplets from array satisfies a*a +b*b =c*c
var inpArray=[3,4,1,6,5];  //exp output(3,4,5)
var opArray=[];
SquareArray=[];
for (key in inpArray){
    inputNo=inpArray[key];
    SquareOfInputNo=inputNo*inputNo;
    SquareArray.push(SquareOfInputNo)
}

//console.log(SquareArray);  //[ 9, 16, 1, 36, 25 ]
var SquareArray=SquareArray.sort((i,j)=>i-j)

console.log(SquareArray);
