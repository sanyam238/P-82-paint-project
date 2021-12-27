canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

width_line = 1;

radius = document.getElementById("Radius");

 var MouseEvent = "empty";

var last_position_X , last_position_Y;

canvas.addEventListener("mousedown",my_mouseDown);

function my_mouseDown(e) {
color = document.getElementById("Color").value;

width_line = document.getElementById("width_line").value;

MouseEvent = "mousedown";
console.log("mouse down");
}

canvas.addEventListener("mousemove",my_mouseMove);

function my_mouseMove(e) {

current_position_mouse_X = e.clientX - canvas.offsetLeft;

current_position_mouse_Y = e.clientY - canvas.offsetTop;

if (MouseEvent == "mousedown"){

    ctx.beginPath();

    ctx.strokeStyle = color;

    ctx.lineWidth = width_line;

    

ctx.moveTo(last_position_X,last_position_Y);
console.log("last position of X and Y coordinates = ");
console.log("X = " + last_position_X + " ,Y = " + last_position_Y);

ctx.arc(current_position_mouse_X,current_position_mouse_Y,radius,0,2 * Math.PI);
console.log("current position of x and y coordinates = ");
console.log("X = " + current_position_mouse_X + " ,Y = " + current_position_mouse_Y);
    ctx.stroke();
}
last_position_X = current_position_mouse_X;
last_position_Y = current_position_mouse_Y;
}

canvas.addEventListener("mouseup",mouseUp);

function mouseUp(e){

MouseEvent = "mouseup";
}


function clear_area() {

    ctx.clearRect(0,0,canvas.width,canvas.height);
    console.log("clear");
}