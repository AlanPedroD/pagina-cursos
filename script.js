let cursos = [
    {
        logo: 'imagens/logo-tic-em-trilhas.svg',
        autor: 'Logo tic em trilhas',
        titulo: 'Design para quem não é designer',
        paragrafo: 'Aprenda os fundamentos de design.',
        linkCurso: 'https://ticemtrilhas.org.br/trail/8926b75f-1801-44e4-8475-540660bf1c4f',
    },
    {
        logo: 'imagens/logo-tic-em-trilhas.svg',
        autor: 'Logo jornada dev',
        titulo: 'Curso de React.js',
        paragrafo: 'Aprenda: criar aplicativos da web escaláveis e de alta qualidade.',
        linkCurso: 'https://jornadadodev.com.br/cursos/front-end/reactjs',
    },
    {
        logo: 'imagens/logo-jornada-dev.png',
        autor: 'Logo jornada dev',
        titulo: 'Curso Bootstrap 5',
        paragrafo: 'Ao final do curso, você terá adquirido um amplo conhecimento sobre o Bootstrap e suas principais funcionalidades',
        linkCurso: 'https://jornadadodev.com.br/cursos/front-end/bootstrap-5'
    }
];

let containerCards = document.querySelector('.cards-container');

for (let i = 0; i < cursos.length; i++) {
    // Cria um novo card
    let novoCard = document.createElement('div');
    novoCard.classList.add('card'); // Adiciona a classe 'card'
    
    // Cria a div para o logo
    let divLogo = document.createElement('div');
    divLogo.classList.add('div-logo-cursos'); // Adiciona a classe 'div-logo'
    let img = document.createElement('img'); // Cria a imagem
    img.src = cursos[i].logo; // Define a fonte da imagem
    img.alt = `Imagem da ${cursos[i].autor}`; // Define o texto alternativo
    divLogo.appendChild(img); // Adiciona a imagem na divLogo
    
    // Adiciona a divLogo no card
    novoCard.appendChild(divLogo);
    
    // Cria o título
    let titulo = document.createElement('h3');
    titulo.textContent = cursos[i].titulo; // Define o texto do título
    novoCard.appendChild(titulo); // Adiciona o título no card
    
    // Cria o parágrafo
    let paragrafo = document.createElement('p');
    paragrafo.textContent = cursos[i].paragrafo; // Define o texto do parágrafo
    novoCard.appendChild(paragrafo); // Adiciona o parágrafo no card
    
    // Cria o link
    let link = document.createElement('a');
    link.href = cursos[i].linkCurso; // Define o href do link
    link.target = '_blank'; // Define que o link deve abrir em nova aba
    link.textContent = 'Iniciar'; // Define o texto do link
    novoCard.appendChild(link); // Adiciona o link no card
    
    // Adiciona o novo card ao container
    containerCards.appendChild(novoCard);
}


// Selecione os elementos
const logo = document.querySelector('#logo');
const hoverSpan = document.getElementById('hover-span');

// Imagem original e nova
const originalLogo = 'imagens/logo-06.png';
const newLogo = 'imagens/nova-clara.png';

// Adicionar eventos de mouse
hoverSpan.addEventListener('mouseover', function() {
    logo.src = newLogo; // Troca a logo
});

hoverSpan.addEventListener('mouseout', function() {
    logo.src = originalLogo; // Restaura a logo original
});
