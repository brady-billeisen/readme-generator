const inquirer = require('inquirer');
const fs = require('fs');

const prompt = inquirer.createPromptModule();

prompt([
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
            'Eclipse Public License 1.0', 
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
    generateBadge(answers);
})

const generateBadge = (answers) => {
    let badge = '';
    if (answers.license === 'MIT License') badge += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    else if (answers.license === 'Apache License 2.0') badge += '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    else if (answers.license === 'GNU GPLv3') badge += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    else if (answers.license === 'ISC License') badge += '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    else if (answers.license === 'Boost Software License 1.0') badge += '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    else if (answers.license === 'Creative Commons Zero v1.0') badge += '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    else if (answers.license === 'Eclipse Public License 1.0') badge += '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    else if (answers.license === 'Mozilla Public License 2.0') badge += '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    generateReadme(answers, badge);
}

const generateReadme = (answers, badge) => {
    const readMeContent = `
# ${answers.title}

${badge}

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