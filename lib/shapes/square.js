//figure out how to create a square shape and use user shape color
const Shape = require('./shape.js');

//figure out how to create a square shape and use user shape color
class Square extends Shape {
    constructor (text, fontColor, shapeColor) {
      super(text, fontColor, shapeColor);
    }
    
    //method to generate triangle
    generateSquare () {
        return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${this.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
  </svg>`;
      }
  }

  module.exports = Square;