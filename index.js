const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide license information for your project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
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
If you have any questions, please contact me at ${answers.email}. You can also find more of my work at [${answers.github}](github.com/${answers.github}).`.trim();

    fs.writeFile('README.md', readMeContent, (err) => {
        if (err) throw err;
        console.log('README.md has been created!');
    });
}