// Cria um valor aleatório de RGB e coloca no parágrafo como string (cor a ser adivinhada)
function randomColor() {
  const rgb = `(${Math.floor(Math.random() * 255)}, ` +
   `${Math.floor(Math.random() * 255)}, ` +
   `${Math.floor(Math.random() * 255)})`
  document.getElementById('rgb-color').innerText = rgb;
}

randomColor();

