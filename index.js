const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/generatePage');

const questions = {
    generic: [
        {
            type: 'confirm',
            message: 'Do you want to add Employees to your team?',
            name: 'addTeam'
        },
        {
            type: 'input',
            message: 'What is the Employees role?',
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is the Employees name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the their Employee ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the Employees E-mail address?',
            name: 'email'
        },

        
        
    ],
    manager: 'What is the Managers office number?',
    engineer: 'What is the Engineers GitHub username?',
    intern: 'What school is the Intern associated with?'
}




function init() {
    inquirer
        .prompt([

        ])
        .then((response) => {
            console.log(response)
        })
}

init()