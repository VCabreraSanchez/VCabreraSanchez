var canvas = document.querySelector('#lienzo');
var ctx = canvas.getContext('2d');

console.log('ctx',ctx);

//CIELO
var grd = ctx.createLinearGradient(0,0,0,500);
//grd.addColorStop(0,'blue');
grd.addColorStop(0,'rgb(255, 179, 0)');
grd.addColorStop(1,'white');
ctx.fillStyle = grd;
ctx.fillRect(0,0,1000,600);

//OCEANO

var grd2 = ctx.createLinearGradient(0,400,0,500);
grd2.addColorStop(0,'rgb(0, 98, 255)');
grd2.addColorStop(1,'white');
ctx.fillStyle = grd2;
ctx.fillRect(0,400,1000,100);

//MONTAÑA 1

ctx.beginPath();
ctx.fillStyle = 'rgb(109, 117, 109)';
ctx.moveTo(0,400);
ctx.lineTo(200,100);
ctx.lineTo(400,400);
ctx.fill();

//MONTAÑA 2

ctx.beginPath();
ctx.fillStyle = 'rgb(144, 145, 144)';
ctx.moveTo(200,400);
ctx.lineTo(400,100);
ctx.lineTo(600,400);
ctx.fill();

//MONTAÑA 3

ctx.beginPath();
ctx.fillStyle = 'rgb(149, 153, 149)';
ctx.moveTo(400,400);
ctx.lineTo(600,100);
ctx.lineTo(800,400);
ctx.fill();

//MONTAÑA 4

ctx.beginPath();
ctx.fillStyle = 'rgb(155, 164, 155)';
ctx.moveTo(600,400);
ctx.lineTo(800,100);
ctx.lineTo(1000,400);
ctx.fill();

//MONTAÑA ABAJO 1
ctx.beginPath();
ctx.fillStyle = 'rgb(0, 158, 0)';
ctx.moveTo(0,400);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.fill();

//MONTAÑA ABAJO 1 - REFLEJO
ctx.beginPath();
ctx.fillStyle = 'rgb(0, 107, 0)';
ctx.moveTo(400,400);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.fill();

//MONTAÑA ABAJO 2
ctx.beginPath();
ctx.fillStyle = 'rgb(0, 158, 0)';
ctx.moveTo(600,400);
ctx.lineTo(800,300);
ctx.lineTo(800,450);
ctx.fill();

//MONTAÑA ABAJO 2 - REFLEJO
ctx.beginPath();
ctx.fillStyle = 'rgb(0, 107, 0)';
ctx.moveTo(1000,400);
ctx.lineTo(800,300);
ctx.lineTo(800,450);
ctx.fill();

//NIEVE MONTAÑA 1
ctx.beginPath();
ctx.fillStyle = 'rgb(207, 207, 207)';
ctx.moveTo(200,300);
ctx.lineTo(200,100);
ctx.lineTo(267,200);
ctx.fill();

//NIEVE MONTAÑA 1 - REFLEJO
ctx.beginPath();
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.moveTo(200,300);
ctx.lineTo(200,100);
ctx.lineTo(133,200);
ctx.fill();

//NIEVE MONTAÑA 2
ctx.beginPath();
ctx.fillStyle = 'rgb(207, 207, 207)';
ctx.moveTo(400,300);
ctx.lineTo(400,100);
ctx.lineTo(467,200);
ctx.fill();

//NIEVE MONTAÑA 2 - REFLEJO
ctx.beginPath();
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.moveTo(400,300);
ctx.lineTo(400,100);
ctx.lineTo(333,200);
ctx.fill();

//NIEVE MONTAÑA 3
ctx.beginPath();
ctx.fillStyle = 'rgb(207, 207, 207)';
ctx.moveTo(600,300);
ctx.lineTo(600,100);
ctx.lineTo(667,200);
ctx.fill();

//NIEVE MONTAÑA 3 - REFLEJO
ctx.beginPath();
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.moveTo(600,300);
ctx.lineTo(600,100);
ctx.lineTo(533,200);
ctx.fill();

//NIEVE MONTAÑA 4
ctx.beginPath();
ctx.fillStyle = 'rgb(207, 207, 207)';
ctx.moveTo(800,300);
ctx.lineTo(800,100);
ctx.lineTo(867,200);
ctx.fill();

//NIEVE MONTAÑA 4 - REFLEJO
ctx.beginPath();
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.moveTo(800,300);
ctx.lineTo(800,100);
ctx.lineTo(733,200);
ctx.fill();

//ARBOL 1
ctx.beginPath();
ctx.fillStyle = 'rgb(177, 72, 2)';
ctx.fillRect(100,220,25,100);

ctx.beginPath();
ctx.fillStyle = 'rgb(207, 137, 24)';
ctx.arc(80,190,25,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(156, 107, 47)';
ctx.arc(140,170,40  ,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(188, 127, 15)';
ctx.arc(113,195,50,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(90, 48, 12)';
ctx.arc(125,225,25,0,2*Math.PI);
ctx.fill();

//MONTAÑA VERDE 1
ctx.beginPath();
ctx.fillStyle = 'rgb(28, 86, 5)';
ctx.arc(0,500,250,0,2*Math.PI);
ctx.fill();

//ADORNOS MONTAÑA
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(25,500,25,0,2*Math.PI);
ctx.arc(75,500,25,0,2*Math.PI);
ctx.arc(125,500,25,0,2*Math.PI);
ctx.arc(175,500,25,0,2*Math.PI);
ctx.arc(225,500,25,0,2*Math.PI);
ctx.fill();

//ARBOL 2
ctx.beginPath();
ctx.fillStyle = 'rgb(177, 72, 2)';
ctx.fillRect(900,250,25,100);

ctx.beginPath();
ctx.fillStyle = 'rgb(90, 55, 12)';
ctx.moveTo(850,300);
ctx.lineTo(913,200);
ctx.lineTo(976,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(126, 99, 26)';
ctx.moveTo(850,250);
ctx.lineTo(913,150);
ctx.lineTo(976,250);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(139, 105, 43)';
ctx.moveTo(850,200);
ctx.lineTo(913,100);
ctx.lineTo(976,200);
ctx.fill();

//MONTAÑA VERDE 2
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.moveTo(650,500);
ctx.bezierCurveTo(700,350,1100,250,1200,500);
ctx.fill();



