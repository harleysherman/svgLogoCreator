const Shape = require('.tests/shape.js');

//test if triangle shape is chosen, use this file
describe('Shape', () => {
    // A test is created to check that user's shape is triangle
    describe('circle', () => {
      it('should shape equal circle', () => {
        const userShape = "circle";
        const shape = new Shape();
        expect(shape.askQuestions()).toEqual(userShape);
      });
    });
  });