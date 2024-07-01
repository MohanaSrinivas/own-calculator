const btn_1=document.getElementById("1");
const btn_2=document.getElementById("2");
const btn_3=document.getElementById("3");
const btn_4=document.getElementById("4");
const btn_5=document.getElementById("5");
const btn_6=document.getElementById("6");
const btn_7=document.getElementById("7");
const btn_8=document.getElementById("8");
const btn_9=document.getElementById("9");
const btn_0=document.getElementById("0");
const btn_dot=document.getElementById("dot");
const display=document.getElementById("input");

btn_1.addEventListener("click",function(){

    display.value+=1;
})
btn_2.addEventListener("click",function(){

    display.value+=2;
})
btn_3.addEventListener("click",function(){

    display.value+=3;
})
btn_4.addEventListener("click",function(){

    display.value+=4;
})
btn_5.addEventListener("click",function(){

    display.value+=5;
})
btn_6.addEventListener("click",function(){

    display.value+=6;
})
btn_7.addEventListener("click",function(){

    display.value+=7;
})
btn_8.addEventListener("click",function(){

    display.value+=8;
})
btn_9.addEventListener("click",function(){

    display.value+=9;
})
btn_0.addEventListener("click",function(){

    display.value+=0;
})
btn_dot.addEventListener("click",function(){
    display.value+=".";
})
document.getElementById("c").onclick=function(){
    display.value=null;
    input.placeholder="0";
}
document.getElementById("add").onclick=function(){
    display.value+="+";
}
document.getElementById("sub").onclick=function(){
    display.value+="-";
}
document.getElementById("mul").onclick=function(){
    display.value+="*";
}
document.getElementById("divide").onclick=function(){
    display.value+="/";
}
document.getElementById("equal").onclick=function(){
   try{
    input.value=eval(input.value);
   }
   catch(err){
    alert('invalid');
    display.value="0";
   }
}
function s_off(){
    input.style.background="black";
    display.value="";
    input.placeholder="Turned off";
    document.getElementById('1').input.display="";

}
function s_on(){
    input.style.background="skyblue";
    input.placeholder="0";
    
}
 



