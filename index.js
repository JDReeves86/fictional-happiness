const fs = require('fs');
const inquirer = require('inquirer');
const generateStaff = require('./src/generateStaff');
const generatePage = require('./src/generatePage');

const managerQuestions = [
    {
        type: 'list',
        message: 'How are you today?',
        choices: ['Good', "I'm alright", "It's been a pretty rough day", 'Please leave me alone'],
        name: 'role',
        filter() {
            return 'Manager'
        },
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your E-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Do you want to add members to your team?',
        choices: ['Yes', 'No'],
        name: 'addMore',
    }
];

const questions =[
    {
        type: 'list',
        message: 'What is the Employees role?',
        choices: ['Engineer', 'Intern'],
        name: 'role',
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
        type: 'list',
        message: 'Do you want to add more employees to your team?',
        choices: ['Yes', 'No'],
        name: 'addTeam'
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Success! Please check the "dist" directory for the generated file "index.html"')
    )
}

function employeeQs() {
    return inquirer.prompt(questions).then((response) => {
        if (response.addTeam == 'No') {
            generateStaff.saveEmployee(response)
            writeToFile('./dist/index.html' ,generatePage.generatePage(generateStaff.getStaff()))
        }
        else {
            generateStaff.saveEmployee(response)
            return employeeQs()
        }
    })
}

function init() {
    return inquirer.prompt(managerQuestions).then((response) => {
        if (response.addMore == 'No') {
            generateStaff.saveEmployee(response)
            writeToFile('./dist/index.html' ,generatePage.generatePage(generateStaff.getStaff()))
        }
        else if (response.addMore == 'Yes') {
            generateStaff.saveEmployee(response)
            employeeQs()
        }
    })
}



init()