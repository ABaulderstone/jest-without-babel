import { area as rectangleArea } from './rectangle/area.js';

const calculateRectangleArea = () => {
  const width = Number(document.getElementById('width').value);
  const height = Number(document.getElementById('height').value);
  return rectangleArea(width, height);
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const outputPara = document.getElementById('output');
  outputPara.innerText = `The area is ${calculateRectangleArea()}`;
});
