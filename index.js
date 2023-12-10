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

let logoCounter =1;

async function generateLogo() {
  try {
    const userInput = await promptUser();

    // Extract shape name from user input
    const shapeName = userInput.shape.toLowerCase();

    // Create a filename with the shape name and counter
    const filename = path.join(__dirname, 'examples', `${shapeName}_logo${logoCounter}.svg`);

    // Increment the counter for the next run
    logoCounter++;

    // Create SVG file based on user input
    const svgContent = generateSVG(userInput);
    fs.writeFileSync(filename, svgContent);

    console.log(`Generated ${filename}`);
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

generateLogo();




