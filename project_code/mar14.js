$(function() {

    //var wl1 = new Wirelib($("#canvas1")[0]), n = 0;
    ////wl1.setStrokeStyle("#ff0000");
    ////w11.StrokeStyle = "#ff0000";
    //wl1.addBox(0, 0, 0, 100, 100, 100);
    //wl1.loop(24,
    //    function() {
    //        wl1.rotateY(0.1);
    //    }
    //);
    //var wl2 = new Wirelib($("#canvas2")[0]);
    ////wl2.setStrokeStyle("#0000ff");
    ////w12.StrokeStyle = "#0000ff";    
    //wl2.addBox(0, 0, 0, 100, 100, 100);
    //wl2.loop(12,
    //    function() {
    //        wl2.rotateX(0.1);
    //        wl2.rotateY(Math.sin(n) * 0.2);
    //        n += 0.02;
    //    }
    //);
    
    var w11 = new Wirelib($("#canvasHead")[0]);
    w11.strokeStyle = "rgb(255, 0, 255)";       
    w11.addCircle(0,0,0,50,4); 
    w11.loop(54, function() {
        w11.rotateX(0.015);
        //w13.rotateY(0.01);
        w11.draw();
    });
    
    var w13 = new Wirelib($("#canvasTail")[0]);
    w13.strokeStyle = "rgb(255, 0, 255)";      
    w13.addCircle(0,0,0,200,64);
    w13.loop(48, function() {
        w13.rotateY(0.01);
        //w13.rotateY(0.01);
        w13.draw();
    });
    
    var w14 = new Wirelib($("#canvasBody")[0]), n = 0;
    w14.strokeStyle = "rgba(255, 0, 255, 0.5)"
    w14.addBox(0, 0, 0, 100, 100, 100);
    w14.loop(12,
        function() {
            w14.rotateX(0.1);
            w14.rotateY(Math.sin(n) * 0.2);
            n += 0.02;
        }
    );    
    
});