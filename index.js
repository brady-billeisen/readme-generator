const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const badges = require('./badges');

const prompt = inquirer.createPromptModule();

prompt(questions)
.then((answers) => {
    generateReadme(answers);
})

const generateReadme = (answers) => {
    const badge = badges[answers.license];
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