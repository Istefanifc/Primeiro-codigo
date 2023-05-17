const imagem = document.querySelector('.exibir-imagem');
const barra = document.querySelector('.barra');

const botao = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const vetimagens = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg', 'i5.jpg']

const alts = {
    'i1.jpg': '1',
    'i2.jpg': '2',
    'i3.jpg': '3',
    'i4.jpg': '4',
    'i5.jpg': '5'

}

for (const img of vetimagens) {

    const novaImagem = document.createElement('img')
    novaImagem.setAttribute('scr', `img1/${img}`);
    novaImagem.setAttribute('alt', alts[img]);
    barra.appendChild(novaImagem);
    novaImagem.addEventListener('click', (e) => {
        barra.src = e.target.src;
        barra.alt = e.target.alt;
    })

    botao.addEventListener('click', () => {
        const botaoclass = botao.getAttribute('class');
        if (botaoclass === 'dark') {
            botao.setAttribute('class', 'light');
            botao.textContent = 'Lighten';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        } else {
            botao.setAttribute('class', 'dark');
            botao.textContent = 'Darken';
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
    })

}