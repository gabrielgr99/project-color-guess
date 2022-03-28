// Cria um valor aleatório de RGB e coloca no parágrafo como string (cor a ser adivinhada)
function randomColor() {
  const colorGuess = `(${Math.floor(Math.random() * 255)}, `
   + `${Math.floor(Math.random() * 255)}, `
   + `${Math.floor(Math.random() * 255)})`;
  document.getElementById('rgb-color').innerText = colorGuess;
  return colorGuess;
}

// Exibe se a cor escolhida pelo usuário está certa ou não
let score = 0;
function chosenColor() {
  this.style.borderColor = 'red';
  if (this.id === 'correct') {
    document.getElementById('answer').innerText = 'Acertou!';
    score += 3;
    document.getElementById('score').innerText = `Placar: ${score}`;
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
  }
}

// Cria 6 divs para a section com id colors e adiciona cores aleatórias a cada uma, senda uma das cores igual a do código rgb criado
// pela função randomColor
function addColors() {
  const rgb = randomColor();
  const positionColor = Math.floor(Math.random() * 6);
  for (let index = 0; index < 6; index += 1) {
    const color = document.createElement('div');
    color.className = 'ball';
    if (index === positionColor) {
      color.style.backgroundColor = `rgb${rgb}`;
      color.id = 'correct';
    } else {
      color.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)})`;
    }
    document.getElementById('color-option').appendChild(color);
  }
  [...document.getElementsByClassName('ball')].forEach((element) => {
    element.addEventListener('click', chosenColor);
  });
}

addColors();

// Reseta as cores ao clique do botão e aleatoriza tudo novamente
function reset() {
  randomColor();
  document.getElementById('color-option').innerHTML = '';
  addColors();
  document.getElementById('answer').innerText = 'Escolha uma cor';
}

document.getElementById('reset-game').addEventListener('click', reset);
