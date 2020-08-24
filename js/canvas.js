


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
   ctx.arc(75,75,60,Math.PI,Math.PI*0.5,false);
   ctx.arc(75,75,32,Math.PI*0.5,Math.PI*1,false);
   ctx.closePath()
   ctx.fill();

   //segundo camino, en naranja
   ctx.fillStyle = '#ff8800';
   ctx.beginPath();
   ctx.arc(75,75,15,0,Math.PI*2,false);
   ctx.fill();

var d = document.getElementById("grafica");
var ctx = d.getContext("2d");

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

    function draw() {
  var canvas = document.getElementById('micanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x coordinate
        var y = 25 + i * 50; // y coordinate
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}