// class Shape to include text, fontColor, shapeColor
class Shape {
    constructor (text, fontColor, shapeColor, shape) {
        if(text.length > 3) {
            throw new Error(`Text must not be more than 3 characters. Please try again.`);
        }
        this.text = text;
        this.fontColor = fontColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
    }
}

//export shape.js
module.exports = Shape;