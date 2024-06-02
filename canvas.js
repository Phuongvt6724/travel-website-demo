var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "bold 30px Arial";
ctx.fillStyle = "red";
ctx.shadowColor = "gray";
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 1;
ctx.fillText("Designed by Vo Thanh Phuong", 30, 50);
