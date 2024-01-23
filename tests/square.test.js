const Shape = require('../shape.js');

//test if squar4e shape is chosen, use this file
describe('Shape', () => {
    // A test is created to check that user's shape is square
    describe('square', () => {
      it('should shape equal square', () => {
        const userShape = "square";
        const shape = new Shape();
        expect(shape.askQuestions()).toEqual(userShape);
      });
    });
  });