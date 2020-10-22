var txt=document.querySelector("#txt");
function display(num){
    
    txt.value+=num;

clrscr=()=>txt.value="";}

evaluate=()=>{
    let data=eval(txt.value);
    txt.value=data;
}