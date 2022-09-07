const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/generatePage');

const questions = [
    {
        type: 'list',
        message: 'What is the Employees role?',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role',
        validate: (x) => {
            if (x == 'Manager' && response.employee.role.includes(x)) {
                return 'There can be only one manager'
            }
        },
    },
    {
        type: 'input',
        message: 'What is the Employees name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the their Employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Employees E-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the their office number?',
        name: 'officeNumber',
        when(response) {
            return response.role === 'Manager'
        },
    },
    {
        type: 'input',
        message: 'What is the their Github username?',
        name: 'github',
        when(response) {
            return response.role === 'Engineer'
        },
    },
    {
        type: 'input',
        message: 'What school are they associated with?',
        name: 'school',
        when(response) {
            return response.role === 'Intern'
        },
    },
    {
        type: 'confirm',
        message: 'Do you want to add more employees to your team?',
        name: 'addTeam'
    },
]

function init() {
    return inquirer.prompt(questions).then((response) => {
        // generatePage.generatePage(response)
        if (!response.addTeam) {
            generatePage.saveEmployee(response)
            generatePage.parseEmployees()
            generatePage.generatePage(response)
        }
        else {
            generatePage.saveEmployee(response)
            return init()
        }
    })
}

init()