canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_Mousedown);

function my_Mousedown(a){

    color=document.getElementById("color").value;

    mouse_x=a.clientX-canvas.offsetLeft;

    mouse_y=a.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();
}

function clear(){

   ctx.clearRect(0,0,canvas.width,canvas.height);
}