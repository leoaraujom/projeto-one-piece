const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        botoes.forEach(botao => {
            botao.classList.remove('selecionado');
        });
        personagens.forEach(personagem => {
            personagem.classList.remove('selecionado');
        });
        botao.classList.add('selecionado');
        personagens[index].classList.add('selecionado');
    });
});