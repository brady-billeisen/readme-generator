const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        name: 'Introduction',
        message: 'Welcome to the README Generator! Please answer the following questions to generate your README.md file. Use <br> with no spaces on either side to create a new line, if needed. Press Enter/Return to get started.'
    },
    {
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        name: 'test',
        message: 'Please provide test instructions for your project.'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please provide license information for your project. Use the arrow keys and the enter/return key to select a license.',
        choices: [
            'None', 
            'Apache License 2.0', 
            'GNU GPLv3', 
            'MIT License', 
            'ISC License', 
            'Boost Software License 1.0', 
            'Creative Commons Zero v1.0', 
            'Eclipse Public License 2.0', 
            'Mozilla Public License 2.0'
        ]
    },
    {
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        name: 'email',
        message: 'Please provide your email address.'
    }
])
.then((answers) => {
    generateReadme(answers);
})

const generateReadme = (answers) => {
    const readMeContent = `
# ${answers.title}

## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contribution
${answers.contribution}
## Test
${answers.test}
## License
${answers.license}
## Questions
If you have any questions or need further assistance, feel free to reach out.
Email: [${answers.email}](mailto:${answers.email})
GitHub: [${answers.github}](https://github.com/${answers.github})`.trim();

    fs.writeFile('README.md', readMeContent, (err) => {
        if (err) throw err;
        console.log('README.md has been created!');
    });
}