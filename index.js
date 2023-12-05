
const fs = require('fs');
const run = async () => {
    console.log('script is running...');
const inquirer = await import('inquirer');
console.log('inquirer imported successfully.');
// const inquirer = require('inquirer');
const shapes = require('./shapes');


const generateSVG = (color, shape, text) => {
const shapeInstance = new shape(text, color);
const svgContent = shapeInstance.render();


//   Generate SVG content based on the selected shape
  switch (shape) {
    case 'circle':
      svgContent = `<circle cx="150" cy="100" r="80" fill="${this.color}" /> `
      break;
    case 'square':
      svgContent = `<rect width="300" height="200" fill="${this.color}" />`;
      break;
    case 'triangle':
      svgContent = `<polygon points="200,10 250,210 160,210" fill="${this.color}" /> `
                    
      break;
    default:
      console.log('Invalid shape');
      process.exit(1);
  }

  // Wrap the content in an SVG tag
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${svgContent}
              </svg>`;

  return svg;
};

const saveSVGToFile = (svg, filename) => {
  fs.writeFileSync(filename, svg);
  console.log(`Generated ${filename}`);
};

const runCLI = async () => {
    console.log('script is running...');
    console.log('inquirer imported successfully')
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);
  console.log('after inguirer.prompt');

  const { text, textColor, shape, shapeColor } = userInput;

  const svg = generateSVG(textColor, shape, text, shapeColor);

  const filename = 'logo.svg';
  saveSVGToFile(svg, filename);
};

run();
};






