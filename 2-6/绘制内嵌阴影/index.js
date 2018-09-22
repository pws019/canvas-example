var canvas  = document.getElementById('canvas'),
  context =  canvas.getContext('2d');

function setEraserAttributes() {
  context.lineWidth = 1;
  context.shadowColor = 'blue';
  context.shadowOffsetX = -5;
  context.shadowOffsetY = -5;
  context.shadowBlur = 20;
  context.strokeStyle = 'rgba(0,0, 255, 0.6)'
}

function drawEaser(loc) {
  context.save();
  setEraserAttributes();

  context.beginPath();
  context.arc(loc.x, loc.y, 60, 0, Math.PI *2, false);

  // 确保绘制区域只在圆内
  context.clip();
  context.stroke();
}

drawEaser({x:100, y:100});