//figure out how to create a triangle shape and use user shape color
const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor (text, fontColor, shapeColor) {
    super(text, fontColor, shapeColor);
  }
  
//method to generate triangle
    generateTriangle () {
        return `<svg version="1.1"
height="300" width="200">
<polygon points="125,10 200,300 50,300" style="fill:${this.shapeColor}" />
<text x="125" y="250" font-size="50" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = Triangle;