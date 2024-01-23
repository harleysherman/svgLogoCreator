//figure out how to create a circle shape and use user shape color
const Shape = require('./shape');

class Circle extends Shape {
  constructor (text, fontColor, shapeColor) {
    super(text, fontColor, shapeColor); //pass to parent Shape
  }

//method to generate circle
    generateCircle () {
        return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = Circle;