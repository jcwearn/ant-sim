var canvas = document.getElementById('ant-canvas');
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
}

var img = new Image();
img.src = '../images/ant.png';

var timestamp = 66;
var nextRow = 0;

function draw(csv){
  var interval = setInterval(function(){
    renderFrame(csv.slice(nextRow));
  }, 33);
}

function renderFrame(csv) {
  var rowsToDraw = [];
  for(var i = 1; i < csv.length; i++) {
    var row = csv[i];
    var timestamp_current = row[1];
    
    if(timestamp_current === timestamp) {
      rowsToDraw.push({
        id: row[0],
        timestamp: row[1],
        x: row[2],
        y: row[3],
        angle: row[4]
      });
    } else {
      nextRow += i;
      timestamp = timestamp_current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rowsToDraw.forEach(function(row) {
        ctx.save();
        ctx.translate(row.x, row.y);
        ctx.translate(8, 8);
        ctx.rotate(row.angle);
        ctx.drawImage(img, -8, -8);
        ctx.restore();
      });

      break;
    }
  }
}
