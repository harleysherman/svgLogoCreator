//figure out how to create a square shape and use user shape color
class Circle extends Shape {
    constructor () {
      super(shapeColor, text, fontColor);
    }
    
  
  //method to generate triangle
      generateTriangle () {
          return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  </svg>`;
      }
  }