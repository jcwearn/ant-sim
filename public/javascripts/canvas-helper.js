var canvas = document.getElementById('ant-canvas');
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
}

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
        var x = row.x;
        var y = row.y;
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(x,y,10, 10);
      });

      break;
    }
  }
}
