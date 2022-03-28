const sketch = document.querySelector('#sketch-area');
const desiredWidth = 40;
sketch.style.width = `${desiredWidth}vw`;

const resetButton = document.querySelector('#reset');
resetButton.style.fontSize = `${desiredWidth / 20}vw`;

const numPixels = 16;
for (let i = 0; i < numPixels ** 2; i++) {
  const newPixel = document.createElement('div');
  newPixel.classList.add('pixel');
  newPixel.style.width = `${desiredWidth / numPixels}vw`; 
  sketch.appendChild(newPixel);
}

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', fill.bind(null, pixel)))

function fill (box) {
  box.classList.add('filled');
}
