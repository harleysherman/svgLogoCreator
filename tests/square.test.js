const Square = require('../lib/shapes/square');

// A test is created to check that user's shape is Square
describe('square', () => {
    it('should shape equal triangle', () => {
        const userShape = Square;
        const square = new Square("try", "magenta", "green");
        expect(square).toBeInstanceOf(userShape);
    });
    //A test to check the text is given
    it('should set text if text is given', () => {
        const square = new Square("try", "magenta", "green");
        expect(square.text).toEqual("try");
    })
});
