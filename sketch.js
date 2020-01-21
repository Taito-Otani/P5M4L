/////
////
var s = function(p) {
//--------------- Setup ---------------------
    p.setup = function() {
        p.createCanvas(innerWidth, innerHeight);
    
        window.max.bindInlet('set_value', function(_r, _g, _b) {
            param1 = _r;
            param2 = _g;
            param3 = _b;
            p.fill(255);
            p.text(param1, 10, p.height - 20);
            p.text(param2, 10, p.height - 40);
            p.text(param3, 10, p.height - 60);
    });
  };

//--------------- Draw ---------------------
    p.draw = function() {
        p.background(0);
        let mx = p.mouseX;
        let my = p.height / 2;
        p.rect(0, 0, mx, my);
        window.max.outlet('output', p.frameCount);
    };

    p.mousePressed = function(){
     
    }

//--------------- ReSize---------------------
  p.windowResized = function() {
        p.resizeCanvas(innerWidth, innerHeight);
  }
  
};

const myp5 = new p5(s);
