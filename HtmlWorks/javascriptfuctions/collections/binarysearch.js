var array=[1,2,3,4,5,6,7,8]
var lowestpostn=1;
var upperpostn=array.length-1;
var element=1;
flag=0;
while(lowestpostn<upperpostn){
    middlepostn=Math.floor((lowestpostn+upperpostn)/2);
    if(element<middlepostn){
        array[upperpostn]=array[middlepostn-1];
    }
    else if(element>middlepostn){
        array[lowestpostn]=array[middlepostn+1];

    }
    else if(element==middlepostn){
        console.log("searching element is "+array[middlepostn]);
        flag+=1;
        break;
    }
}

