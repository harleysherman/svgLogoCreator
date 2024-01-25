const Circle = require('../lib/shapes/circle');

// A test is created to check that user's shape is Circle
describe('circle', () => {
    it('should shape equal circle', () => {
        const userShape = Circle;
        const circle = new Circle("try", "magenta", "green");
        expect(circle).toBeInstanceOf(userShape);
    });
    //A test to check the text is given
    it('should set text if text is given', () => {
        const circle = new Circle("try", "magenta", "green");
        expect(circle.text).toEqual("try");
    })
});

