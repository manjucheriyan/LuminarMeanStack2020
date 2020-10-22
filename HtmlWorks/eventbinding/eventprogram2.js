var one=document.querySelector("#one");
one.addEventListener("click",()=>{
    one.textContent="am clicked";
    one.style.color="red";
})


var two=document.querySelector("#two");
two.addEventListener("dblclick",()=>{
    two.textContent="am doubleclicked";
    two.style.color="blue";
})


var three=document.querySelector("#three");
three.addEventListener("mouseover",()=>{
    three.textContent="presently mouse over me";
    three.style.color="red";
})
three.addEventListener("mouseout",()=>{
    three.textContent="presently mouse not over me";
    three.style.color="cyan";
})