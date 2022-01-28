var w2 = window.innerWidth;
var h2 = window.innerHeight;

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
// ctx.canvas.width = w;
ctx2.canvas2.width = w2;
ctx2.canvas2.height = h2 / 1.99;
// canvas.style.marginLeft = w / 2 + "px";

var start2 = performance.now();

window.onresize = function () {
  w2 = window.innerWidth;
  h2 = window.innerHeight;
  ctx2.canvas2.width = w2;
  ctx2.canvas2.height = h2 / 1.99;
  // canvas.style.marginLeft = w / 2 + "px";
};

function drawSine2(time2, n2, angular_freq2, perlin_shift2) {
  var elapsed2 = (time2 - start2) / 1000;
  var phase_angle2 = elapsed2 * 2;

  var x2, y2, amplitude2;
  for (var i = 0; i < n; i++) {
    ctx2.beginPath();
    ctx2.strokeStyle = "rgba(255,255,0,0.1)";
    for (x = 0; x < w2; x++) {
      amplitude2 = noise.perlin2(x / ((i + 1) * perlin_shift), elapsed) * 200;
      amplitude2 *= Math.sin(x * 2);
      y2 = amplitude2 * Math.sin(x2 * angular_freq2 + phase_angle2 * (i + 1));
      ctx2.lineTo(x2, y2 * ((i + 1) / 4) + h2 / 2);
    }
    ctx2.stroke();
    ctx2.closePath();
  }
}

function render2(time2) {
  // clear screen
  ctx2.fillStyle = "rgba(0,0,0,1)";
  ctx2.fillRect(0, 0, w2, h2);
  drawSine2(
    time2,
    5, // num waves
    256, // angular_freq
    100
  ); // perlin_shift
  requestAnimationFrame(render);
}

//----------------------------------------------------------------------------
noise.seed(Math.random());
render2();
