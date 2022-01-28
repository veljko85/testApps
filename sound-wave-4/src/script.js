var w = window.innerWidth;
var h = window.innerHeight;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = w;
ctx.canvas.height = h;

var start = performance.now();

window.onresize = function() {
  w = window.innerWidth;
  h = window.innerHeight;
  ctx.canvas.width = w;
  ctx.canvas.height = h;
}

function drawSine(time, n, angular_freq, perlin_shift) {
  var elapsed = (time - start) / 1000;
  var phase_angle = elapsed * 2;
  
  var x, y, amplitude;
  for(var i=0; i<n; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "hsla("+(220+(17*i))+",100%,50%,1)";
    for (x=0; x<w; x++) {
      amplitude = noise.perlin2(x/((i+1)*perlin_shift), elapsed) * 200;
      amplitude *= Math.sin(x * 2);
      y = amplitude * Math.sin(x * angular_freq + (phase_angle * (i+1)));
      ctx.lineTo(x, y*((i+1)/4) + (h/2));
    }
    ctx.stroke();
    ctx.closePath();
  }
  
}

function render(time) {
  // clear screen
  ctx.fillStyle="rgba(8,0,20,1)";
  ctx.fillRect(0,0,w,h); 
  drawSine(time, 
           5,      // num waves 
           256,    // angular_freq
           100);   // perlin_shift
  requestAnimationFrame(render) 
}

//----------------------------------------------------------------------------
noise.seed(Math.random());
render();
