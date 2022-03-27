const sketch = document.querySelector('#sketch-area');
const desiredWidth = 40;
sketch.style.width = `${desiredWidth}vw`;

const numPixels = 16;
for (let i = 0; i < numPixels ** 2; i++) {
  const newPixel = document.createElement('div');
  newPixel.classList.add('pixel');
 
  //40vw is the default (hard-coded) width of the sketch
  //may want to change in future
  newPixel.style.width = `${desiredWidth / numPixels}vw`; 
  sketch.appendChild(newPixel);
}
