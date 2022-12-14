var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var size = 10;

function generate() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (var i = 0; i < canvas.width / size; i++) {
    for (var w = 0; w < canvas.height / size; w++) {
      ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
      ctx.fillRect(i * size, w * size, size, size);
    }
  }
  requestAnimationFrame(generate);
}

generate();

document.addEventListener('mousedown', function (e) {
  generate();
});

document.addEventListener('keydown', function (e) {
  generate();
});

      var socket = io();
      socket.emit('send', {public: true, message: 'Hello World!'});