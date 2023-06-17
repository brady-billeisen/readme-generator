const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const badges = require('./badges');
const readMeContent = require('./utils');
const utils = require('./utils');

const prompt = inquirer.createPromptModule();

prompt(questions)
    .then((answers) => {
        const badge = badges[answers.license];
        const content = readMeContent.readMe(answers, badge);

        fs.writeFile('README.md', content, (err) => {
            if (err) throw err;
            console.log('README.md has been created!');
        });
    })
