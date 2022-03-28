const sketch = document.querySelector('#sketch-area');
const defaultWidth = 40;
sketch.style.width = `${defaultWidth}vw`;

const resetButton = document.querySelector('#reset');
resetButton.style.fontSize = `${defaultWidth / 20}vw`;
resetButton.addEventListener('click', clearSketch);

const defaultPixels = 16;
createPixels(defaultPixels, defaultWidth);

function createPixels (pixelCount, sketchWidth) {
  const sketch = document.querySelector('#sketch-area')
  for (let i = 0; i < pixelCount ** 2; i++) {
    const newPixel = document.createElement('div');
    const pixelWidth = sketchWidth / pixelCount;
    newPixel.classList.add('pixel');
    newPixel.style.width = `${pixelWidth}vw`; 
    newPixel.addEventListener('mouseover',fill.bind(null, newPixel));
    sketch.appendChild(newPixel);
  }
}

function fill (box) {
  box.classList.add('filled');
}

function clearSketch () {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.classList.remove('filled'));

  const desiredWidth = parseInt(prompt("Please enter your desired number of horizontal pixels (100 max)."));
  let newWidth;
  if (desiredWidth >= 1 && desiredWidth <= 100) {
    newWidth = desiredWidth;
  } else {
    newWidth = 16;
    alert(`Invalid number. Horizontal pixel count will default to ${newWidth}.`);
  }
  changeResolution(newWidth);
}

function changeResolution (numPixels) {
  const sketch = document.querySelector('#sketch-area');
  const currentWidth = parseInt(sketch.style.width);
  removePixels(sketch);
  createPixels(numPixels, currentWidth);
}

function removePixels (sketchWindow) {
  while (sketchWindow.firstChild) {
    sketchWindow.firstChild.remove();
  }
}
