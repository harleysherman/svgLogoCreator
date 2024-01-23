//figure out how to create a triangle shape and use user shape color
const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor (text, fontColor, shapeColor) {
    super(text, fontColor, shapeColor);
  }
  
//method to generate triangle
    generateTriangle () {
        return `<svg version="1.1"
height="700" width="900">
<polygon points="200,10 400,400 50,400" style="fill:${this.shapeColor}" />
<text x="210" y="270" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = Triangle;