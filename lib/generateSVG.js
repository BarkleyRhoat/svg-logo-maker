//  importing the classes from ./shapes
const { Triangle, Circle, Square } = require('./shapes');

// generate svg content based on input data
function generateSVG(data) {
  const { text, textColor, shape, shapeColor } = data;
  let shapeEl;

  //  Using a switch statement to create an instance of the appropriate shape class

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

 // Setting the color and text properties for the shape element
  shapeEl.setColor(shapeColor);
  shapeEl.setText(text, textColor);

  // Generating the SVG content by calling the render method on the shape element
  const svgContent = shapeEl.render();
  return svgContent;
}
// Exporting the generateSVG function for use in other modules
module.exports = generateSVG;


