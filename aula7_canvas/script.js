// Contexto de duas dimensões para o canvas.
// Também é possível realizar em 3d (webgl)
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Abre o desenho atual
//ctx.beginPath();

// Fecha o desenho atual
//ctx.closePath();

// Define a espessura do pincel
//ctx.lineWidth;

// Define a cor do pincel
//ctx.strokeStyle;

// Define a cor de preenchimento
//ctx.fillStyle;

// Retângulo
/* ctx.beginPath();

ctx.lineWitdh = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';

// Preenche o retângulo utilizando como parâmetros = x (posição inicial na horizontal), y (posição inicial na vertical), w (largura) e h (altura) 
ctx.fillRect(10, 10, 50 ,50);

// Define a cor de fundo do retângulo com os mesmos parâmetros anteriores.
ctx.strokeRect(10, 10, 50, 50);
ctx.closePath(); */

// Podemos desenhar diversas formas geométricas
ctx.beginPath();
ctx.lineWitdh = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';

// Pesquisar o que o .moveTo faz
ctx.moveTo(200, 150);
ctx.lineTo(60, 10);

ctx.closePath();