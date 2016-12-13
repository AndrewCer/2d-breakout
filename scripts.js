var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var ballRadius = 10;

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {

  if(x + dx > canvas.width || x + dx < 0) {
      dx = -dx;
  }

  if(y + dy > canvas.height || y + dy < 0) {
      dy = -dy;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
//setInterval() loops indefinitely unless stopped
setInterval(draw, 10);
