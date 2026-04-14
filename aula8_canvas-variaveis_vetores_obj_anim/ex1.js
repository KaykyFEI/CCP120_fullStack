let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var circulo = {
    x: 200,
    y: 200,
    raio: 50,
    cor:"blue",
    desenha: function(){
        ctx.beginPath(),
        ctx.fillStyle = this.cor;
        ctx.arc(this.x, this.y, this.raio, 0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

function animacao() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circulo.desenha();
    requestAnimationFrame(animacao);
}

// O "ouvinte" de eventos fica fora da função de animação
document.addEventListener('mousemove', function(evento) {
    let rect = canvas.getBoundingClientRect();
    
    // Usamos o 'rect' para subtrair a posição do canvas na tela
    circulo.x = evento.clientX - rect.left;
    circulo.y = evento.clientY - rect.top;
    
    // Opcional: ver no console a posição atualizada
    console.log("X:", circulo.x, "Y:", circulo.y);
});

// Inicia o ciclo de animação
animacao();
/* document.addEventListener('keydown', function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp') {circulo.y = circulo.y-3}
    if(tecla == 'ArrowDown') {circulo.y = circulo.y+3}
    if(tecla == 'ArrowLeft') {circulo.x = circulo.x-3}
    if(tecla == 'ArrowRight') {circulo.x = circulo.x+3}
}) */