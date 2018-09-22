var canvas  = document.getElementById('canvas'),
  context =  canvas.getContext('2d');

function rect(x, y, w, h, dir) {
  if(dir) {
    context.moveTo(x, y);
    context.lineTo(x, y+h);
    context.lineTo(x+w, y+h);
    context.lineTo(x+w, y);
  } else {
    context.moveTo(x, y);
    context.lineTo(x+w, y);
    context.lineTo(x+w, y+h);
    context.lineTo(x, y+h);
  }
  context.closePath();
}

function drawCutouts() {
  context.beginPath();

  addOuterRectanglePath();
  addCirclePath();
  addRectanglePath();
  addTrianglePath();

  context.fill();
}

function strokeCutoutShapes() {
  context.save();
  context.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  context.beginPath();
  addOuterRectanglePath();
  context.stroke();

  context.beginPath();
  addCirclePath();
  addRectanglePath();
  addTrianglePath();
  context.stroke();

  context.restore();
}

function addOuterRectanglePath() {
  context.rect(110, 25, 370, 335);
}

function addRectanglePath() {
  rect(310, 55, 70, 35, true);
}

function addCirclePath() {
  context.arc(300, 300, 40, 0, Math.PI * 2, true);
}

function addTrianglePath() {
  context.moveTo(400, 200);
  context.lineTo(250, 115);
  context.lineTo(200, 200);
  context.closePath();
}
 context.fillStyle = 'goldenrod';
 drawCutouts();
 strokeCutoutShapes();