var canvas  = document.getElementById('canvas'),
     context =  canvas.getContext('2d'),
     FONT_HEIGHT = 15,
     MARGIN = 35,
     HAND_TRUNCATION = canvas.width/25,
     HOUR_HAND_TRUNCATION = canvas.width/10,
     NUMERAL_SPACING = 20,
     RADIUS = canvas.width/2 - MARGIN,
     HAND_RADIUS = RADIUS + NUMERAL_SPACING;

function drawCircle() {
  context.beginPath();
  context.strokeStyle = '#fff';
  context.arc(canvas.width/2, canvas.height/2, RADIUS, 0, Math.PI *2, true);
  context.stroke();
}

function drawNumerals() {
  var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        angle = 0,
        numeralWidth = 0;

  numerals.forEach(function(numeral){
    angle = Math.PI/6 * (numeral - 3);
    numeralWidth = context.measureText(numeral).width;
    context.fillText(numeral, 
      canvas.width/2  + Math.cos(angle) * (HAND_RADIUS) -
        numeralWidth/2,
      canvas.height/2 + Math.sin(angle) * (HAND_RADIUS) +
        FONT_HEIGHT/3);
  })
}

// number 1~60
function drawHand(number, radius, color) {
  var angle = (Math.PI *2) / 60 * number - Math.PI / 2;
  context.strokeStyle = color || '#000';
  context.moveTo(canvas.width / 2, canvas.height / 2);
  context.lineTo(
    canvas.width / 2 + radius * Math.cos(angle), 
    canvas.height / 2 + radius * Math.sin(angle)
  )
  context.stroke();
}

function drawHands() {
  var date = new Date();
  var hour = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();

  var hourH = hour > 12 ? hour - 12 : hour;
  var hourM = mm/60;
  var baseRadius = RADIUS- HAND_TRUNCATION;
  drawHand((hourH+hourM) * 5, baseRadius - HOUR_HAND_TRUNCATION, '#f00');
  drawHand(mm, baseRadius-HAND_TRUNCATION, '#0f0');
  drawHand(ss, baseRadius, '#00f');
}

function drawCenter() {
  context.beginPath();
  context.arc(canvas.width/2, canvas.height/2, RADIUS, 0, Math.PI * 2, true)
}



function drawClock() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  drawCenter();
  drawNumerals();
  drawHands();
}
context.font = FONT_HEIGHT + 'px Arial';
loop = setInterval(drawClock, 1000)
drawClock();