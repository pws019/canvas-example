var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d');


  context.font = '48pt Helvetica';
  context.strokeStyle = 'blue';
  context.fillStyle = 'red';
  context.lineWidth = '2';
  
  // Text
  context.strokeText('Stroke', 60, 110);
  context.fillText('Fill', 440, 110);

  context.strokeText('Stroke & Fill', 650, 110);

 // Rectangles
 context.lineWidth = '5';
 context.beginPath();
 context.rect(80, 150, 150, 100); 
 context.stroke();

 context.beginPath();
 context.rect(400, 150, 150, 100);
 context.fill();

 context.beginPath();
 context.rect(750, 150, 150, 100);
 context.stroke();
 context.fill();

 // open arcs
 context.beginPath()
 context.arc(150, 370, 60, 0, Math.PI * 3/2);
 context.stroke();

 context.beginPath();
context.arc(475, 370, 60, 0, Math.PI * 3/2);
context.fill();

context.beginPath();
context.arc(820, 370, 60, 0, Math.PI * 3/2);
context.stroke();
context.fill();

// closed arcs
context.beginPath()
context.arc(150, 550, 60, 0, Math.PI * 3/2);
context.closePath();
context.stroke();

context.beginPath();
context.arc(475, 550, 60, 0, Math.PI * 3/2);
context.closePath();
context.fill();

context.beginPath();
context.arc(820, 550, 60, 0, Math.PI * 3/2);
context.closePath();
context.stroke();
context.fill();