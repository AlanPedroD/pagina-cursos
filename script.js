// let cursos = [
//     {
//         logo: 'imagens/logo-tic-em-trilhas.svg',
//         autor: 'Logo tic em trilhas',
//         titulo: 'Design para quem não é designer',
//         paragrafo: 'Aprenda os fundamentos de design.',
//         linkCurso: 'https://ticemtrilhas.org.br/trail/8926b75f-1801-44e4-8475-540660bf1c4f',
//     },
//     {
//         logo: 'imagens/logo-tic-em-trilhas.svg',
//         autor: 'Logo jornada dev',
//         titulo: 'Curso de React.js',
//         paragrafo: 'Aprenda: criar aplicativos da web escaláveis e de alta qualidade.',
//         linkCurso: 'https://jornadadodev.com.br/cursos/front-end/reactjs',
//     },
//     {
//         logo: 'imagens/logo-jornada-dev.png',
//         autor: 'Logo jornada dev',
//         titulo: 'Curso Bootstrap 5',
//         paragrafo: 'Ao final do curso, você terá adquirido um amplo conhecimento sobre o Bootstrap e suas principais funcionalidades',
//         linkCurso: 'https://jornadadodev.com.br/cursos/front-end/bootstrap-5'
//     }
// ];

// let containerCards = document.querySelector('.cards-container');

// for (let i = 0; i < cursos.length; i++) {
//     let novoCard = document.createElement('div');
//     novoCard.classList.add('card'); 
    
//     let divLogo = document.createElement('div');
//     divLogo.classList.add('div-logo-cursos'); 
//     let img = document.createElement('img'); 
//     img.src = cursos[i].logo; 
//     img.alt = `Imagem da ${cursos[i].autor}`; 
//     divLogo.appendChild(img); 
    
  
//     novoCard.appendChild(divLogo);
    
   
//     let titulo = document.createElement('h3');
//     titulo.textContent = cursos[i].titulo; 
//     novoCard.appendChild(titulo); 
    
 
//     let paragrafo = document.createElement('p');
//     paragrafo.textContent = cursos[i].paragrafo; 
//     novoCard.appendChild(paragrafo); 
    

//     let link = document.createElement('a');
//     link.href = cursos[i].linkCurso; 
//     link.target = '_blank'; 
//     link.textContent = 'Iniciar'; 
//     novoCard.appendChild(link); 
    
    
//     containerCards.appendChild(novoCard);
// }



// const logo = document.querySelector('#logo');
// const hoverSpan = document.getElementById('hover-span');


// const originalLogo = 'imagens/logo-06.png';
// const newLogo = 'imagens/nova-clara.png';


// hoverSpan.addEventListener('mouseover', function() {
//     logo.src = newLogo; 
// });

// hoverSpan.addEventListener('mouseout', function() {
//     logo.src = originalLogo; 
// });
