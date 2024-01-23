const Shape = require('../shape.js');

//test if triangle shape is chosen, use this file
describe('Shape', () => {
    // A test is created to check that user's shape is triangle
    describe('triangle', () => {
      it('should shape equal triangle', () => {
        const userShape = "triangle";
        const shape = new Shape();
        expect(shape.askQuestions()).toEqual(userShape);
      });
    });
  });