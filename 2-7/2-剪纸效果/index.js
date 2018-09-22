var canvas  = document.getElementById('canvas'),
  context =  canvas.getContext('2d');

function drawTwoArcs() {
  context.beginPath();
  context.arc(300, 190, 150, 0, Math.PI * 2, false);
  context.arc(300, 190, 100, 0, Math.PI * 2, true);

  context.fill();
  context.shadowColor = undefined;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.stroke();
}

function draw() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  context.shadowColor = 'rgba(0, 0, 0, 0.8)';
  context.shadowOffsetX = 12;
  context.shadowOffsetY = 12;
  context.shadowBlur = 15;

  drawTwoArcs();
}

draw();