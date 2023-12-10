const { Triangle, Circle, Square } = require('./shapes');

function generateSVG(data) {
  const { text, textColor, shape, shapeColor } = data;
  let shapeEl;

  switch (shape.toLowerCase()) {
    case 'circle':
      shapeEl = new Circle(shapeColor);
      break;
    case 'square':
      shapeEl = new Square(shapeColor);
      break;
    case 'triangle':
      shapeEl = new Triangle(shapeColor);
      break;
    default:
      console.log('Invalid shape');
      process.exit(1);
  }

  shapeEl.setColor(shapeColor);
  shapeEl.setText(text, textColor);

  const svgContent = shapeEl.render();
  return svgContent;
}

module.exports = generateSVG;


