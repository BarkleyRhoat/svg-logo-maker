const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG.js'); 
// const shapes = require('./lib/shapes.js');
const path = require('path');

async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  return userInput;
}

async function generateLogo() {
  try {
    const userInput = await promptUser();

    // Create SVG file based on user input
    const svgContent = generateSVG(userInput);

    // Define the path to the 'examples' folder and the SVG file name
    const exampleFolderPath = path.join(__dirname, 'examples');
    const svgFilePath = path.join(exampleFolderPath, 'logo.svg');

    // Ensure that the 'examples' folder exists
    if (!fs.existsSync(exampleFolderPath)) {
      fs.mkdirSync(exampleFolderPath);
    }

    // Write the SVG content to the specified file path
    fs.writeFileSync(svgFilePath, svgContent);

    console.log(`Generated ${svgFilePath}`);
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

generateLogo();




