function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var context = canvas.getContext('2d');

    context.fillStyle = "rgba(0, 0, 200, 0.6)";

    context.strokeRect(200, 200, 50, 50);
    
    context.fillRect(20,20,100,100);
    context.fillStyle = "rgba(0, 0, 200, 0.6)";
    context.fillRect(120,120,200,200);
    context.fillStyle = "rgba(100, 200, 100, 0.9)";
    context.fillRect(180,270,100,100);

    context.clearRect(40,40,60,60);
    context.strokeRect(45,45,50,50);

  }
}