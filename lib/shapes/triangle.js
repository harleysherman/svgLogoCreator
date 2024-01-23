//figure out how to create a triangle shape and use user shape color
const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor () {
    super(shapeColor, text, fontColor);
  }
  

//method to generate triangle
    generateTriangle () {
        return `<svg version="1.1"
height="210" width="500">
<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
    }
}

module.exports = Triangle;