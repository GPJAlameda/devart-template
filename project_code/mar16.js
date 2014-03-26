$(function() {
    
    var points = [], numPoints = 5, i, canvas, context, width, height, gravity = 0.02, emitter;
    
    canvas = $("#canvasFlyCuore")[0];
    width = canvas.width;
    height = canvas.height;
    context = canvas.getContext("2d");
    
    emitter = {x:width / 2, y:height};
       
    function initPoint(p) {
        p.x = emitter.x;
        p.y = emitter.y;
        p.vx = Math.random() * 4 - 2;
        p.vy = Math.random() * -5 - 3;
        p.width = Math.random() * 20 + 1;
        p.height = p.width + 2;
    }
    
    function update() {
        var i, point, len = points.length;
        for(i = 0; i < len; i += 1) {
            point = points[i];
            point.vy += gravity;
            point.x += Math.sin(point.vx);
            point.y += Math.cos(point.vy);
            if(point.x > width ||
               point.x < 0 ||
               point.y > height ||
               point.y < 0) {
                initPoint(point);
            }
        }
    }
    
    function draw() {
        var i, point, len = points.length;
        context.clearRect(0, 0, width, height);
        for(i = 0; i < len; i += 1) {
            point = points[i];                   
            drawCuore(point.x,point.y,point.width,point.height);
        }        
    }
    
    
    function drawCuore(cx,cy,cwidth,cheight) {
        
            var px, py, pxq, pyq, pxend, pyend;
            
            context.beginPath();            
            
            px = cx;
            py = cy;
            pyend = py - cheight/4;
            context.moveTo(px, pyend);
            
            //1
            pxend = px + cwidth/6;
            pyend = py - cheight/2.7;
            pxq = px + cwidth/14;
            pyq = pyend;
            context.quadraticCurveTo(pxq, pyq, pxend, pyend);
    
            //2
            pxend = px + (cwidth/2.3);
            pyend = py;
            pxq = pxend;
            pyq = py - (cheight/2.7);
            context.quadraticCurveTo(pxq, pyq, pxend, pyend);        
            
            //3
            pxend = px;
            pyend = py + (cheight/2.5);
            pxq = px + (cwidth/2.4);
            pyq = pyend - (cheight/8);
            context.quadraticCurveTo(pxq, pyq, pxend, pyend);
    
            //4
            pxend = px - (cwidth/2.3);
            pyend = py;
            pxq = px - (cwidth/2.3);
            pyq = pyend + (cheight/4);
            context.quadraticCurveTo(pxq, pyq, pxend, pyend);
            
            //5
            pxend = px - cwidth/6;
            pyend = py - cheight/2.7;
            pxq = px - cwidth/2.3;
            pyq = pyend;        
            context.quadraticCurveTo(pxq, pyq, pxend, pyend);
            
            //6
            pxend = px;
            pyend = py - cheight/4;
            pxq = px - cwidth/14;
            pyq = py - cheight/2.7;                
            context.quadraticCurveTo(pxq, pyq, pxend, pyend);        
            
            context.lineWidth = 2;
            context.strokeStyle = "rgb(255, 0, 255)";
            context.fillStyle = "rgba(200, 0, 0, 0.8)";
            context.stroke();
            context.fill();
        
    };        
       
    function addPoint() {
        var point;
        if(points.length < numPoints) {
            point = {};
            initPoint(point);
            points.push(point);
        }          
    }
    
    setInterval(function() {
        var y;
        y = 20 + Math.random() * 35 + 1;
        drawCuore(emitter.x,emitter.y - y,40,40);
        context.moveTo(emitter.x,emitter.y-98);
        context.lineTo(emitter.x,emitter.y-45);
        context.stroke();        
    }, 1000/24);    
    
    setInterval(function() {
        addPoint();
        update();
        draw();
    }, 1000/24);
    
    
});
