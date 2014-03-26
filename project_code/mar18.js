$(function() {
    
    var s11 = new Shapelib($("#canvasFlyCuore")[0]);        
    s11.strokeStyle = "rgb(255, 0, 255)";
    s11.fillStyle = "rgba(200, 0, 0, 0.8)";
    s11.lineWidth = 2;
    s11.loop(24, function() {
        s11.addPoint();
        s11.updatePoints();
        s11.drawEmitter();
    });
    
    var s12 = new Shapelib($("#canvasStitchCuore")[0]);
    s12.loop(24, function () {
        s12.strokeStyle = "rgb(255, 0, 255)";
        s12.fillStyle = "rgba(200, 0, 0, 0.8)";
        s12.lineWidth = 2;
        s12.drawNeedle();
        s12.strokeStyle = "rgba(150, 75, 150, 0.5)";        
        s12.lineWidth = 3;
        s12.drawSupportNeedle(92,47);        
    });
    
});