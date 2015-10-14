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
        drawAnt(ant);
      });

      break;
    }
  }
}

function drawAnt(ant) {
  var x = ant.x;
  var y = ant.y;
  var angle = ant.angle;
  var id = ant.id;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.translate(8, 8);
  ctx.rotate(angle);
  ctx.drawImage(img, -8, -8);
  ctx.restore();
}

function drawTrail() {
  
}
