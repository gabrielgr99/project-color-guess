// Cria um valor aleatório de RGB e coloca no parágrafo como string (cor a ser adivinhada)
function randomColor() {
  const colorGuess = `(${Math.floor(Math.random() * 255)}, ` +
   `${Math.floor(Math.random() * 255)}, ` +
   `${Math.floor(Math.random() * 255)})`
  document.getElementById('rgb-color').innerText = colorGuess;
  return colorGuess;
}

function addColors() {
  const rgb = randomColor();
  const positionColor = Math.floor(Math.random() * 6)

  for (let index = 0; index < 6; index += 1) {
    const color = document.createElement('div');
    color.className = 'ball';

    if (index === positionColor) {
      color.style.backgroundColor = `rgb${rgb}`
    } else {
      color.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)})`;
    }
    
    document.getElementById('colors').appendChild(color)
  }
}

addColors()