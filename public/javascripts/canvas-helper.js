var canvas = document.getElementById('ant-canvas');
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
}

var img = new Image();
img.src = '../images/ant.png';

var timestamp = 66;
var nextAnt = 0;

var antTrails = {
  ant1: [],
  ant2: [],
  ant3: [],
  ant10: [],
  ant33: [],
  ant37: [],
  ant42: [],
  ant45: []
};

function draw(csv){
  var interval = setInterval(function(){
    renderFrame(csv.slice(nextAnt));
  }, 33);
}

function renderFrame(csv) {
  var antsToDraw = [];
  for(var i = 1; i < csv.length; i++) {
    var ant = csv[i];
    var timestamp_current = ant[1];
    
    if(timestamp_current === timestamp) {
      antsToDraw.push({
        id: ant[0],
        timestamp: ant[1],
        x: ant[2],
        y: ant[3],
        angle: ant[4]
      });
    } else {
      nextAnt += i;
      timestamp = timestamp_current;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      antsToDraw.forEach(function(ant) {
        drawFrame(ant);
      });

      break;
    }
  }
}

function drawFrame(ant) {
  var x = ant.x;
  var y = ant.y;
  var angle = ant.angle;
  drawAnt(x, y, angle);
  updateAntTrail(ant);
}

function drawAnt(x, y, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.translate(8, 8);
  ctx.rotate(angle);
  ctx.drawImage(img, -8, -8);
  ctx.restore();
}

function drawTrail() {
  
}

function updateAntTrail(ant) {
  switch(ant.id) {
  case 1:
    if(antTrails.ant1.length > 19) 
      antTrails.ant1.shift();
    
    antTrails.ant1.push({ x:x, y:y });      
    break;
  case 2:
    if(antTrails.ant2.length > 19) 
      antTrails.ant2.shift();
    
    antTrails.ant2.push({ x:x, y:y });      
    break;
  case 3:
        if(antTrails.ant3.length > 19) 
      antTrails.ant3.shift();
    
    antTrails.ant3.push({ x:x, y:y });      
    break;
  case 10:
        if(antTrails.ant10.length > 19) 
      antTrails.ant10.shift();
    
    antTrails.ant10.push({ x:x, y:y });      
    break;
  case 33:
        if(antTrails.ant33.length > 19) 
      antTrails.ant33.shift();
    
    antTrails.ant33.push({ x:x, y:y });      
    break;
  case 37:
        if(antTrails.ant37.length > 19) 
      antTrails.ant37.shift();
    
    antTrails.ant37.push({ x:x, y:y });      
    break;
  case 42:
        if(antTrails.ant42.length > 19) 
      antTrails.ant42.shift();
    
    antTrails.ant42.push({ x:x, y:y });      
    break;
  case 45:
        if(antTrails.ant45.length > 19) 
      antTrails.ant45.shift();
    
    antTrails.ant45.push({ x:x, y:y });      
    break;
  }
}
