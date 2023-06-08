const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a description of your project.'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please provide installation instructions for your project.'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please provide usage information for your project.'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        name: 'test',
        type: 'input',
        message: 'Please provide test instructions for your project.'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please provide license information for your project.',
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
        type: 'input',
        message: 'Please provide your GitHub username.'
    },
    {
        name: 'email',
        type: 'input',
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
If you have any questions, please contact me at ${answers.email}. You can also find more of my work at [${answers.github}](github.com/${answers.github}).`.trim();

    fs.writeFile('README.md', readMeContent, (err) => {
        if (err) throw err;
        console.log('README.md has been created!');
    });
}