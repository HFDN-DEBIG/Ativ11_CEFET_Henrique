// Seleciona o header e cria um título h1
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const title = document.createElement('h1');
title.textContent = 'O que é JavaScript (JS)?';
header.appendChild(title);

// Seleciona o main e cria duas divs com títulos h2 e parágrafos p
const main = document.querySelector('main');

const div1 = document.createElement('div');
div1.className = 'content';
const h2_1 = document.createElement('h2');
h2_1.textContent = 'O que é JS?';
const p1 = document.createElement('p');
p1.textContent = 'JavaScript é uma linguagem de programação que permite adicionar interatividade e funcionalidade dinâmica a páginas da web. Com ele, é possível criar animações, validar formulários, atualizar conteúdo sem recarregar a página e muito mais.';
div1.appendChild(h2_1);
div1.appendChild(p1);
main.appendChild(div1);

const div2 = document.createElement('div');
div2.className = 'content';
const h2_2 = document.createElement('h2');
h2_2.textContent = 'História do JavaScript';
const p2 = document.createElement('p');
p2.textContent = 'O JavaScript foi criado por Brendan Eich, um engenheiro de software da Netscape Communications Corporation, no período de 10 dias em maio de 1995. Originalmente, a linguagem foi chamada de "Mocha" e depois renomeada para "LiveScript", porém, por razões estratégicas, a Netscape fez uma parceria com a Sun Microsystems (que possuía a linguagem Java) e decidiu renomeá-la como "JavaScript". Em dezembro de 1995, o JavaScript foi lançado como parte do navegador Netscape Navigator 2.0.';
div2.appendChild(h2_2);
div2.appendChild(p2);
main.appendChild(div2);

const textF = document.createElement('div');
const text = document.createElement('h5');
text.textContent = '© Todos os direitos reservados  Henrique Dudak 2023'
textF.appendChild(text);
footer.appendChild(textF);
