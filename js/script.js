const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; // deslocamento esquerdo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');



    if (pipePosition <= 115  && pipePosition > 0  && marioPosition < 100) {  
     
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario .style.bottom = `${marioPosition}px`;

        mario.src = '/imgs/game-over.png';
        mario.style.width = '70px ';
        mario.style.marginLeft = '40px';

        clearInterval(loop); // limpa p/ não ficar rodando o loop infinatamente

    }

}, 10);

document.addEventListener('keydown', jump);
