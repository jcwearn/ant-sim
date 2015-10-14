function draw(csv){
  var canvas = document.getElementById('ant-canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
  }
  readCSV(csv, ctx);
}

function readCSV(csv, ctx) {
  for(var i = 1; i < csv.length; i++) {
    var row = csv[i];
    var x = row[2];
    var y = row[3];
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x,y,10, 10);  
  }
}

