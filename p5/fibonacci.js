function fibonacci(x) {
  let fibo = [];
  let primeiro = 0;
  let segundo = 1;

  for (i = 0; i < x; i++) {
    fibo.push(primeiro);
    aux = primeiro;
    primeiro = segundo;
    segundo += aux;
  }

  return fibo;
}

function setup() {
  createCanvas(700, 700);
  stroke(200);
  background(15);
  noLoop();
}

const vetorFibonacci = fibonacci(100);
console.log(vetorFibonacci.length);
function draw() {
  for (i = 2; i < vetorFibonacci.length; i++) {
    rect(i * 10, 700, 1, -vetorFibonacci[i]);
  }
  console.log(i);
}
