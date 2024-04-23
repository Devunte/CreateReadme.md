// TODO: Include packages needed for this application
// Include required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input

// created questions for read me input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'What is this project\'s description?'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What technology was used for installation?'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'What is the purpose of this project?'
  },
  {
    type: 'list',
    name: 'License',
    message: 'Choose a license for this document',
    choices: ['Unlicense',	'IPA', 	'ISC'] // Add license choices here
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Who all helped with the project?'
  },
  {
    type: 'input',
    name: 'Test',
    message: 'What tests were performed for this project?'
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Any additional questions for users?'
  }
];

// TODO: Create a function to write README file
// using the write to file and write file i was able to create data and user input and place it in a readme.md file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, err => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {
      console.log('README file written successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions).then(answers => {
   
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  }).catch(error => {
    console.error('Error occurred during user input:', error);
  });
}

// Function call to initialize app
init();
