var canvas  = document.getElementById('canvas'),
     context =  canvas.getContext('2d');

context.lineJoin = 'round';
context.lineWidth = 30;

context.font = '24px Helvetica';
context.fillText('Click anywhere to earse', 175, 40);

context.strokeRect(75, 100, 200, 200);
context.fillRect(325, 100, 200, 200);

context.canvas.onmousedown = function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}