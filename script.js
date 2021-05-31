var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

var mouseEvent = null;
var lastX,lastY;
var color = "black";
var lineWidth = 1;
canvas.addEventListener("mousedown",mouse_down);

function mouse_down(e) {
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("penWidth").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove",mouse_move);

function mouse_move(e) {
    var current_x = e.clientX - canvas.offsetLeft;
    var current_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = lineWidth;
       ctx.moveTo(lastX,lastY);
       ctx.lineTo(current_x,current_y);
       ctx.stroke();
    }
    lastX = current_x;
    lastY = current_y;
}

canvas.addEventListener("mouseup",mouse_up);

function mouse_up(){
    mouseEvent = "mouseup";
}