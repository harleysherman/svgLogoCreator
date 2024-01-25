const Shape = require('../lib/shapes/shape');

//A test to check if shape is entered
describe('shape', () => {
  it('should be a shape selected', () => {
    const someShape = Shape;
    const shape = new Shape("try", "LimeGreen", "Black");
    expect(shape).toBeInstanceOf(Shape);
  });
  //Test to check text is no more than 3 characters
  it('should be no more than 3 characters', () => {
    const cb = () => new Shape('johndoe');
    const err = new Error(
      'Text must not be more than 3 characters. Please try again.'
    );
    expect(cb).toThrowError(err);
  });
});