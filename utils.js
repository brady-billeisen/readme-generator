module.exports = {
    readMe: (answers, badge) => {
        return `
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
    }
}