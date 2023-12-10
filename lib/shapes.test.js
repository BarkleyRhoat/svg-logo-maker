const {Triangle, Circle, Square} = require('./shapes')

describe('Triangle', () => {
    it('triangle should appear with correct color', () => {
      const shape = new Triangle();
      var color =('orange')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon points="200,10 250,210 160,210" fill="${color}" />`);
    });
  });
  
  
  // Circle test
  describe('Circle', () => {
      it('circle should appear with correct color', () => {
        const shape = new Circle();
        var color =('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
      });
    });
  
  
  // Square test
  describe('Square', () => {
      it('square should appear with correct color', () => {
        const shape = new Square();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="300" height="200" fill="${color}" />`);
      });
    });