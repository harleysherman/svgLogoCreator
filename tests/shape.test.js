//Import Inquirer and FS packages
const inquirer = require('inquirer');
const fs = require('fs');

// class Shape to include text, fontColor, shapeColor
class Shape {
    constructor (text, fontColor, shapeColor, shape) {
        this.text = text;
        this.fontColor = fontColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
    }
}

//test to check if text is no more than three characters
// describe('Shape', () => {
//   it('should be no more than three characters', () => {
//     const userText = "test";

//   })
// });

// Constructor Shape is exported from the file
module.exports = Shape;