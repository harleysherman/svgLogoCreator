// class Shape to include text, fontColor, shapeColor
class Shape {
    constructor (text, fontColor, shapeColor, shape) {
        this.text = text;
        this.fontColor = fontColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
    }
}

//export shape.js
module.exports = Shape;