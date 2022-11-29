// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(data) {

    var license = `This application uses the ${data.license} license`
    var licenseBadge = ''

    if (data.license == 'NA') {
        license = 'NA';
    };
    // TODO: Create a function that returns a license badge based on which license is passed in
    // If there is no license, return an empty string
    var licenseBadge = ''

    if (data.license == 'Apache 2.0'){
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (data.license == 'Eclipse Public 1.0') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    } else if (data.license == 'Mozilla Public 2.0') {
        licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } else if (data.license == 'MIT') {
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }

    // TODO: Create a function to generate markdown for README
    fs.writeFile('README.md', 
`# ${data.name} ${licenseBadge}

## Description(#description)
      
${data.description}<a name="description></a>
                  
## Table of Contents

Description(# Description)
Installation(#installation)
[Usage](# Usage)
[Contributing](# Constributing)
[Tests](# Tests)
[Questions](# Questions)

## Installation

${data.installation}
      
## Usage
      
${data.usage}
      
## License

${license}
      
## Contributing

${data.contribution}
      
## Tests

${data.tests}

## Questions

For additional questions please contact ${data.email}
https://github.com/${data.username}`, 
    function(err){console.log(err)}); 
}
// TODO: Create a function to initialize app
function init() {
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of your application?',
        name: 'name',
    },
    {
      type: 'input',
      message: 'Please provide a description of your application:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide installation instructions for your application:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please describe the usage of your application:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please provide a link to your application:',
      name: 'link',
    },
    {
      type: 'input',
      message: 'Please provide contribution guidelines for contributers of your application:',
      name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to run all necessary software tests:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    {
      type: 'list',
      message: 'Please select which license your application uses:',
      choices: ['Apache 2.0', 'Eclipse Public 1.0', 'Mozilla Public 2.0', 'MIT', 'NA'],
      name: 'license',
    }
  ])
  .then((response) => {
      console.log(response.name);
      console.log(response.description);
      console.log(response.installation);
      console.log(response.link);
      console.log(response.contribution);
      console.log(response.license);
      console.log(response.email);
      console.log(response.username);
      let name = response.fileName;
    writeToFile(response);

});
}

// Function call to initialize app
init();
