let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

desenhaForca();

function desenhaForca() {
    pincel.fillStyle = 'black';
    pincel.fillRect(100, 50, 8.0, 300);
    pincel.fillRect(100, 50, 150, 8.0);
    pincel.fillRect(250, 50, 8.0, 80);
}

function desenhaCabeca() {
    pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.arc(254, 150, 20, 0, 2 * 3.14);
    pincel.fill();
    pincel.lineWidth = 07;
    pincel.strokeStyle = "100px"
    pincel.stroke();
}

function desenhaCorpo() {
    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.lineTo(253, 270);
    pincel.lineTo(253, 170);
    pincel.stroke();
}

function desenhaBracoEsquerdo() {
   pincel.lineWidth = 10;
   pincel.beginPath();
   pincel.lineTo(230, 250);
   pincel.lineTo(250, 170); //aumenta tamanho da linha
   pincel.stroke();
}

function desenhaBracoDireito() {
     pincel.lineWidth = 10;
     pincel.beginPath();
     pincel.lineTo(290, 250);
     pincel.lineTo(250, 170);
     pincel.stroke();
}

function desenhaPernaEsquerda() {
    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.lineTo(253, 250);
    pincel.lineTo(210, 340);
    pincel.stroke();
}

function desenhaPernaDireita() {
   pincel.lineWidth = 10;
   pincel.beginPath();
   pincel.lineTo(255, 250);
   pincel.lineTo(295, 340); //aumenta tamanho da linha
   pincel.stroke();
}
