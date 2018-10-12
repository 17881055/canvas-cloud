var Bg = document.createElement("canvas");
Bg.width = 32;
Bg.height = window.innerHeight;
var context = Bg.getContext("2d");
var gradient = context.createLinearGradient(0, 0, 0, Bg.height);
gradient.addColorStop(0, "#1e4877");
gradient.addColorStop(0.5, "#4584b4");
context.fillStyle = gradient;
context.fillRect(0, 0, Bg.width, Bg.height);

