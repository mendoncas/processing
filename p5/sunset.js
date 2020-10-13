let x = 0
let y = 250

let vetorR = []
let vetorG = []
let vetorB = []

function setup() {
  createCanvas(1360, 560);
  //stroke(200);
}

function draw() {
  background(15)
  repetir(74);
  if(x>=1360){
    noLoop();
    saveCanvas('myCanvas.jpg');
  }
  x+=100;
}

function desenharCirculos(x, callback, distancia, offset, amplitude, tamanho, qtdd, corR,corG,corB){
  noStroke();
  fill(corR, corG, corB);
  circle(x, callback(x, offset, amplitude), tamanho)
  if(qtdd>0)
    desenharCirculos(x-distancia, callback, distancia, offset, amplitude, tamanho, qtdd-1,corR,corG,corB);
}

function repetir(qtdd){
  desenharCirculos(x-qtdd*10, seno, 0.5+qtdd/10, 10+qtdd*6.55, 8-qtdd, 1.3-qtdd/8, 333, map(qtdd, 74, 0, 10,255), map(qtdd, 74, 0, 25, 120), map(qtdd, 74, 0, 97, 120));
  if(qtdd>0)
    repetir(qtdd-1);  
}

function seno(x, offset, amplitude){
    return (sin(x)*amplitude+offset);
}