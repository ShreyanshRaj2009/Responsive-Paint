
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
    
color = "black";
width_of_line = 2;

var width = screen.width;

var new_width = screen.width - 20;
    
var new_height = screen.height - 100;

if(width<992){
    
    document.getElementById('myCanvas').width = new_width;
    document.getElementById('myCanvas').height = new_height;

    document.body.style.overflow = "hidden";

}

else if(width<768){
    var new_width_mobile = screen.width - 100;
    
    var new_height_mobile = screen.height - 250;

    document.getElementById('myCanvas').width = new_width_mobile;
    document.getElementById('myCanvas').height = new_height_mobile;
    
    document.body.style.overflow = "hidden";


}

canvas.addEventListener("touchstart", Mytouchstart);

function Mytouchstart(e){

    console.log ("Mytouchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}


canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{

    current_position_of_Touchx = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_Touchy = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_Touchx + "y = " + current_position_of_Touchy);
    ctx.lineTo(current_position_of_Touchx, current_position_of_Touchy);
    ctx.stroke();
        

    last_position_of_x = current_position_of_Touchx; 
    last_position_of_y = current_position_of_Touchy;
}

