
function drawCanvas(id, createLinearFn) {
  var canvas  = document.getElementById(id),
  context =  canvas.getContext('2d'),
  gradient = createLinearFn(context, canvas)

  gradient.addColorStop(0, 'blue');
  gradient.addColorStop(0.25, 'white');
  gradient.addColorStop(0.5, 'purple');
  gradient.addColorStop(0.75, 'red');
  gradient.addColorStop(1, 'yellow');

  context.strokeStyle = gradient;
  context.strokeRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = gradient;
  context.fillRect(0,0, canvas.width, canvas.height)
}

drawCanvas('canvas1', (context, canvas)=>{
  return context.createLinearGradient(0, 0, canvas.width, 0);
})

drawCanvas('canvas2', (context, canvas)=>{
  return context.createLinearGradient(0, 0, 0, canvas.height);
})

drawCanvas('canvas3', (context, canvas)=>{
  return context.createLinearGradient(0, 0, canvas.width, canvas.height);
})

drawCanvas('canvas4', (context, canvas)=>{
  return context.createLinearGradient(0, 0, 0, canvas.height/2);
})

drawCanvas('canvas5', (context, canvas)=>{
  return context.createRadialGradient(canvas.width/2, canvas.height, 10, canvas.width/2, 0, 100);
})