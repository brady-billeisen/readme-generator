const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const badges = require('./badges');
const utils = require('./utils');

const prompt = inquirer.createPromptModule();

prompt(questions)
    .then((answers) => {
        const badge = badges[answers.license];
        const content = utils.readMe(answers, badge);

        fs.writeFile(answers.fileName, content, (err) => {
            if (err) throw err;
            console.log('Your README.md has been created!');
        });
    })