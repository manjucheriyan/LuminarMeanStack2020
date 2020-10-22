function limit(upper,lower){
    
    for(i=lower;i<=upper;i++){
        var flag=0;
        for(j=2;j<i;j++){
            if(i%j==0){
                flag=1;
                break;
            }
        }
        if(flag==0){
            console.log(i );
        }
        
    }
} var data=limit(10,3);
