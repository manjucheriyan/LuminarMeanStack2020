//completed
var input=3;
var minimum=10;
var maximum=100;    //  9 16

    for(i=0;i<100000;i++){
        result=Math.pow(i, input);
        if((result<maximum)&&(result>minimum)){
        console.log(result);}
    }


