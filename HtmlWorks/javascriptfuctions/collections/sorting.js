var arr=[10,5,9,2]
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            var temp=arr[i];//10
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}console.log(arr);
var arr=arr.sort((i,j)=>i-j)
console.log(arr);