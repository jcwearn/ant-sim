var canvas = document.getElementById('ant-canvas');
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
}

var img = new Image();
img.src = '../images/ant.png';

var timestamp = 66;
var nextAnt = 0;

var antTrails = {
  ant0: [],
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
  drawTrail(ant);
  drawAnt(ant);
  updateAntTrail(ant);
}

function drawAnt(ant) {
  var x = ant.x;
  var y = ant.y;
  var angle = ant.angle;
  ctx.save();
  ctx.translate(x, y);
  ctx.translate(8, 8);
  ctx.rotate(angle);
  ctx.drawImage(img, -8, -8);
  ctx.restore();
}

function drawTrail(ant) {
  var trail = selectAntTrailByID(parseInt(ant.id));
  trail.forEach(function(coordinate){
    var x = coordinate.x;
    var y = coordinate.y;
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x,y,2,2);
  });
}

function updateAntTrail(ant) {
  var x = ant.x;
  var y = ant.y;
  var id = parseInt(ant.id);
  var trailLength = 30;
  switch(id) {
  case 0:
    if(antTrails.ant0.length > trailLength) 
      antTrails.ant0.shift();
    
    antTrails.ant0.push({ x:x, y:y });
    break;
  case 1:
    if(antTrails.ant1.length > trailLength) 
      antTrails.ant1.shift();
    
    antTrails.ant1.push({ x:x, y:y });      
    break;
  case 2:
    if(antTrails.ant2.length > trailLength) 
      antTrails.ant2.shift();
    
    antTrails.ant2.push({ x:x, y:y });      
    break;
  case 3:
    if(antTrails.ant3.length > trailLength) 
      antTrails.ant3.shift();
    
    antTrails.ant3.push({ x:x, y:y });      
    break;
  case 10:
    if(antTrails.ant10.length > trailLength) 
      antTrails.ant10.shift();
    
    antTrails.ant10.push({ x:x, y:y });      
    break;
  case 33:
    if(antTrails.ant33.length > trailLength) 
      antTrails.ant33.shift();
    
    antTrails.ant33.push({ x:x, y:y });      
    break;
  case 37:
    if(antTrails.ant37.length > trailLength) 
      antTrails.ant37.shift();
    
    antTrails.ant37.push({ x:x, y:y });      
    break;
  case 42:
    if(antTrails.ant42.length > trailLength) 
      antTrails.ant42.shift();
    
    antTrails.ant42.push({ x:x, y:y });      
    break;
  case 45:
    if(antTrails.ant45.length > trailLength) 
      antTrails.ant45.shift();
    
    antTrails.ant45.push({ x:x, y:y });      
    break;
  }
}

function selectAntTrailByID(antID) {
  switch(antID) {
  case 0:
    return antTrails.ant0;
    break;
  case 1:
    return antTrails.ant1;
    break;
  case 2:
    return antTrails.ant2;
    break;
  case 3:
    return antTrails.ant3;
    break;
  case 10:
    return antTrails.ant10;
    break;
  case 33:
    return antTrails.ant33;
    break;
  case 37:
    return antTrails.ant37;
    break;
  case 42:
    return antTrails.ant42;
    break;
  case 45:
    return antTrails.ant45;
    break;
  }
}
