function Shapelib(canvas) {
    if (canvas !==  undefined) {
        this.lines = [];
        this.fl = 250;
        this.strokeStyle = "#000000";
        this.fillStyle =  "#000000";
        this.lineWidth = 1;
        this.showCenter = false;
        this.clearCanvas = true;
        this.width = canvas.width;
        this.height = canvas.height;
        this.cx = this.width / 2;
        this.cy = this.height / 2;
        this.cz = this.fl * 2;
        this.context = canvas.getContext("2d");
        //shapes
        this.points = [];
        this.numPoints = 5;
        //improve: use a parameter for the point width        
        //this.wpoint;
        //this.hpoint;
        this.i;
        this.gravity = 0.02;
        this.emitter = {x:this.width / 2, y:this.height};
    }   
}

Shapelib.prototype.initPoint = function (p) {
        p.x = this.emitter.x;
        p.y = this.emitter.y;
        p.vx = Math.random() * 4 - 2;
        p.vy = Math.random() * -5 - 3;
        p.width = Math.random() * 20 + 1; //improve: use a parameter for the point width
        p.height = p.width + 2;
};

Shapelib.prototype.addPoint = function() {
        var point;
        if(this.points.length < this.numPoints) {
            point = {};
            this.initPoint(point);
            this.points.push(point);
        }              
};

Shapelib.prototype.drawEmitter = function() {
    var i, point, len = this.points.length;
    this.context.clearRect(0, 0, this.width, this.height);
    for(i = 0; i < len; i += 1) {
        point = this.points[i];                   
        this.drawCuore(point.x,point.y,point.width,point.height);
    }        
};

Shapelib.prototype.drawNeedle = function() {
    var y,ex,ey;
    this.context.clearRect(0, 0, this.width, this.height);    
    y = 20 + Math.random() * 35 + 1;
    ex = this.emitter.x;
    ey = this.emitter.y - y;
    this.drawCuore(ex, ey, 40, 40);
};

Shapelib.prototype.drawSupportNeedle = function(yBegin, yEnd) {

    this.context.beginPath();
    this.context.lineWidth = this.lineWidth;
    this.context.strokeStyle = this.strokeStyle;
    this.context.moveTo(this.emitter.x, this.emitter.y - yBegin);
    this.context.lineTo(this.emitter.x, this.emitter.y - yEnd);
    this.context.stroke();        

};

Shapelib.prototype.updatePoints = function() {
    var i, point, len = this.points.length;
    for(i = 0; i < len; i += 1) {
        point = this.points[i];
        point.vy += this.gravity;
        point.x += Math.sin(point.vx);
        point.y += Math.cos(point.vy);
        if(point.x > this.width ||
           point.x < 0 ||
           point.y > this.height ||
           point.y < 0) {
           this.initPoint(point);
        }
    }
};

Shapelib.prototype.loop = function (fps, callback) {
    if (!this.running) {
        this.running = true;
        this.interval = setInterval(function () {
            callback();
        }, 1000 / fps);
    }
};

Shapelib.prototype.drawCuore = function(cx,cy,cwidth,cheight) {
    
        var px, py, pxq, pyq, pxend, pyend;
        
        this.context.beginPath();            
        
        px = cx;
        py = cy;
        pyend = py - cheight/4;
        this.context.moveTo(px, pyend);
        
        //1
        pxend = px + cwidth/6;
        pyend = py - cheight/2.7;
        pxq = px + cwidth/14;
        pyq = pyend;
        this.context.quadraticCurveTo(pxq, pyq, pxend, pyend);

        //2
        pxend = px + (cwidth/2.3);
        pyend = py;
        pxq = pxend;
        pyq = py - (cheight/2.7);
        this.context.quadraticCurveTo(pxq, pyq, pxend, pyend);        
        
        //3
        pxend = px;
        pyend = py + (cheight/2.5);
        pxq = px + (cwidth/2.4);
        pyq = pyend - (cheight/8);
        this.context.quadraticCurveTo(pxq, pyq, pxend, pyend);

        //4
        pxend = px - (cwidth/2.3);
        pyend = py;
        pxq = px - (cwidth/2.3);
        pyq = pyend + (cheight/4);
        this.context.quadraticCurveTo(pxq, pyq, pxend, pyend);
        
        //5
        pxend = px - cwidth/6;
        pyend = py - cheight/2.7;
        pxq = px - cwidth/2.3;
        pyq = pyend;        
        this.context.quadraticCurveTo(pxq, pyq, pxend, pyend);
        
        //6
        pxend = px;
        pyend = py - cheight/4;
        pxq = px - cwidth/14;
        pyq = py - cheight/2.7;                
        this.context.quadraticCurveTo(pxq, pyq, pxend, pyend);        
        
        this.context.lineWidth = this.lineWidth;
        this.context.strokeStyle = this.strokeStyle;
        this.context.fillStyle = this.fillStyle;
        this.context.stroke();
        this.context.fill();
    
};        
