// TODO: Include packages needed for this application
const { fstat } = require('fs');
const inquirer = require('inquirer');
const { writeFile} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.
        prompt([
            {
                type: 'input',
                name: 'project-title',
                message: 'What is the title of your project? (Required)',
                validate: title => {
                    if (title) {
                        return true;
                    } else {
                        console.log('Please enter the title of your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'project-description',
                message: 'Please write a description of your project. (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter a description of your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please write instructions on how to install your project. (Required)',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log('Please enter the installation insturctions for your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please write instructions on how to use your project. (Required)',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please enter the usage information for your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Please write the guidelines for contributions to your project. (Required)',
                validate: contributionInput => {
                    if (contributionInput) {
                        return true;
                    } else {
                        console.log('Please write the guidelines for contributions to your project!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmTest',
                message: 'Would you like to enter some test instructions or data?',
                default: true
            },
            {
                type: 'input',
                name: 'test-instructions',
                message: 'Please include any test instructions.',
                when: ({ confirmTest }) => confirmTest
            },
            {
                type: 'checkbox',
                name: 'licenses',
                message: 'What licenses apply to this project? (Check all that apply)',
                choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC']
            },
            {
                type: 'input',
                name: 'link',
                message: 'Enter the GitHub link to your project. (Required)',
                validate: linkInput => {
                    if (linkInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project GitHub link!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter an email where people can reach you. (Required)',
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email")
                        return false;
                    }
                }
            },
        ]);
    };

       

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject)=> {
    fs.writeFile('./dist/README.md' data, err => {
        if (err){
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File Created!'
        });
    });
});
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()
    .then(
