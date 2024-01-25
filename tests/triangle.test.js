const Triangle = require('../lib/shapes/triangle');

// A test is created to check that user's shape is Triangle
describe('triangle', () => {
    it('should shape equal triangle', () => {
        const userShape = Triangle;
        const triangle = new Triangle("try", "magenta", "green");
        expect(triangle).toBeInstanceOf(userShape);
    });
    //A test to check the text is given
    it('should set text if text is given', () => {
        const triangle = new Triangle("try", "magenta", "green");
        expect(triangle.text).toEqual("try");
    })
});