let heart = document.getElementsByClassName('heart')[0];
let player = document.getElementsByClassName('player')[0];
let card = document.getElementsByClassName('container')[0];
let arrow = document.getElementsByClassName('arrow-icon')[0];
let heartInstruction = document.querySelector('.heart-instruction'); // Seleciona o texto do coração
let arrowInstruction = document.querySelector('.arrow-instruction'); // Seleciona o texto da seta


heart.addEventListener('click', () => {
    heart.classList.remove('heart--default');
    heart.classList.add("heart--clicked");
    heartInstruction.classList.add('hidden'); // Esconde o texto "Aperte no coração"

    setTimeout(() => {
        heart.style.display = "none";
        player.classList.remove('hidden');
        arrow.classList.remove('hidden');
        arrowInstruction.classList.remove('hidden'); // Mostra o texto "Aperte na seta"

    }, 1000);

});


arrow.addEventListener('click', () => {
    player.classList.toggle('hidden');
    card.classList.toggle('hidden');
    arrow.classList.toggle('open')
    arrow.classList.toggle('arrow--pos')
    
    // Esconde o texto da seta quando clicar
    arrowInstruction.classList.add('hidden');
});