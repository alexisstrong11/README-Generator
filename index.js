// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
      },
      {
        type: "confirm",
        name: "contents",
        message: "Enter a table of contents for your project.",
    },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe your usage information.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How do others contributute to your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does your project require?',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are your testing instructions?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'How can others send you questions about your project?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What are your first and last name?',
      },
    ];

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
          err ? console.error(err) : console.log('Successfully created README.md!')
        );
      }

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      const readmeContent = generateMarkdown(data);
      writeToFile('README.md', readmeContent);
    });
  }

// Function call to initialize app
init();
