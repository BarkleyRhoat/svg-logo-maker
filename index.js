// const fs = require('fs');
// const inquirer = require('inquirer');
// const path = require("path")

// const generateSVG = (color, shape, text) => {
//     return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     <rect width="100%" height="100%" fill="${color}" />
//     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="40">${text}</text>
//   </svg>
// `;
// }

// const saveSVGToFile = (svg, filename) => {
//     fs.writeFileSync(filename, svg);

// };

// const run = async () => {
//     const userInput = await inquirer.createPromptModule([
//         {
//             type: 'input',
//             name: 'text',
//             message: 'Enter up to three characters for logo',
//             validate: (input) => input.length <= 3,
//         },
//         {
//             type: 'input',
//             name: 'textColor',
//             message: 'Enter the text color (keyword or hexadecimal):',
//         },
//         {
//             type: 'list',
//             name: 'shape',
//             message: 'Select a shape:',
//             choices: ['circle', 'triangle', 'square'],
//         },
//         {
//             type: 'input',
//             name: 'shapeColor',
//             message: 'Enter the shape color (keyword or hexadecimal):',
//         },
//     ]);
    

// const { text, textColor, shape, shapeColor} = userInput;

// const svg = generateSVG(textColor, shapeColor, text);

// const filename = 'logo.svg';
// saveSVGToFile(svg, filename);
// console.log('Generated ${filename}');

// };

// run();
const fs = require('fs');
const inquirer = require('inquirer');
// import inquirer from 'inquirer';

const generateSVG = (color, shape, text) => {
  let svgContent;

  // Generate SVG content based on the selected shape
  switch (shape) {
    case 'circle':
      svgContent = `<circle cx="50%" cy="50%" r="40%" fill="${color}" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">${text}</text>`;
      break;
    case 'square':
      svgContent = `<rect width="100%" height="100%" fill="${color}" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">${text}</text>`;
      break;
    case 'triangle':
      const height = (Math.sqrt(3) / 2) * 100; // Equilateral triangle height
      svgContent = `<polygon points="50%,0 0,${height} 100%,${height}" fill="${color}" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">${text}</text>`;
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

const run = async () => {
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

  const { text, textColor, shape, shapeColor } = userInput;

  const svg = generateSVG(textColor, shape, text);

  const filename = 'logo.svg';
  saveSVGToFile(svg, filename);
};

run();
