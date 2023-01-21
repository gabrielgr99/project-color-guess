// Cria um valor aleatório de RGB e coloca no parágrafo como string (cor a ser adivinhada)
function randomColor() {
  const colorGuess =
    `(${Math.floor(Math.random() * 255)}, ` +
    `${Math.floor(Math.random() * 255)}, ` +
    `${Math.floor(Math.random() * 255)})`;
  document.getElementById('rgb-color').innerText = 'RGB' + colorGuess;
  return colorGuess;
}

// Exibe se a cor escolhida pelo usuário está certa ou não
let score = 0;
function chosenColor() {
  this.style.borderColor = 'red';
  const tagAnswer = document.getElementById('answer');
  if (this.id === 'correct') {
    tagAnswer.innerText = 'Acertou!';
    tagAnswer.style.color = 'rgb(132, 204, 22)';
    score += 3;
    document.getElementById('score').innerText = `Score: ${score}`;
  } else {
    tagAnswer.innerText = 'Errou! Tente novamente!';
    tagAnswer.style.color = 'rgb(190, 18, 60)';
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
  const tagAnswer = document.getElementById('answer');
  randomColor();
  document.getElementById('color-option').innerHTML = '';
  addColors();
  tagAnswer.innerText = 'Escolha uma opção';
  tagAnswer.style.color = 'white';
}

document.getElementById('reset-game').addEventListener('click', reset);
