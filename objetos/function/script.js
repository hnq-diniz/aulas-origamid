// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalCaracteres);

// -----------------------------------------------------------------//

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteúdo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}

console.log(criarElemento('p', 'teste', 'Esse é um paragrafo criado com JavaScript'));

// -----------------------------------------------------------------//

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteúdo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Esse é um título criado com JavaScript'));