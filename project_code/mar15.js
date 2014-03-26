$(function() {
   
    var w11 = new Wirelib($("#canvasHead")[0]);
    w11.strokeStyle = "rgb(255, 0, 255)";       
    w11.addCircle(0,0,0,70,4); 
    w11.loop(64, function() {
        w11.rotateX(0.015);
        w13.rotateY(0.01);
        w11.draw();
    });
    
    var w13 = new Wirelib($("#canvasTail")[0]);
    w13.strokeStyle = "rgb(255, 0, 255)";      
    w13.addCircle(0,0,0,160,64);
    w13.loop(48, function() {
        w13.rotateY(0.01);
        w13.rotateY(0.01);
        w13.draw();
    });
        
});