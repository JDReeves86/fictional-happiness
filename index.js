const fs = require('fs');
const inquirer = require('inquirer');
const generateStaff = require('./src/generateStaff');
const generatePage = require('./src/generatePage');

// Stores initial set of questions for the Managers information.
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
        validate: (response) => {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
    },
    {
        type: 'input',
        message: 'What is your Employee ID?',
        name: 'id',
        validate: (response) => {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
    },
    {
        type: 'input',
        message: 'What is your E-mail address?',
        name: 'email',
        validate: (response) => {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
        validate: (response) => {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
    },
    {
        type: 'list',
        message: 'Do you want to add members to your team?',
        choices: ['Yes', 'No'],
        name: 'addMore',
    }
];

// Stored questions for other team members.
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
        validate: (response) => {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
    },
    {
        type: 'input',
        message: 'What is the their Employee ID?',
        name: 'id',
        validate: (response) => {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
    },
    {
        type: 'input',
        message: 'What is the Employees E-mail address?',
        name: 'email',
        validate: (response) => {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
    },
    {
        type: 'input',
        message: 'What is the their Github username?',
        name: 'github',
        validate: (response) => {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
        when(response) {
            return response.role === 'Engineer'
        },
    },
    {
        type: 'input',
        message: 'What school are they associated with?',
        name: 'school',
        validate(response) {if (response.length == 0) {return 'That is an invalid reponse.'} return true},
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

// uses fs to write the index.html file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Success! Please check the "dist" directory for the generated file "index.html"')
    )
}

// Populates the questions for Engineers @ Interns. At the end the user is asked if they wish to add more team members. If 'No' is chosen, the current
// response is saved and HTML rendered. If 'Yes', then the current response object is saved and the function is recalled to begin a new team member.
// Imports the array of team member classes/objects and passes them into the buildPage() function.
function employeeQs() {
    return inquirer.prompt(questions)
        .then((response) => {
            if (response.addTeam == 'No') {
                generateStaff.saveEmployee(response)
                writeToFile('./dist/index.html' ,generatePage.buildPage(generateStaff.employeeArr))
            }
            else {
                generateStaff.saveEmployee(response)
                return employeeQs()
            }
        })
        .catch((err) => console.log(err))
}

// Starts the inquirer prompts, when asked if the user wishes to add more employees, employs logic to determine what to do depending on the answer.
// If 'No' is chosen, the current response information is saved and the HTML page is written. If 'Yes' is chosed, the response data is saved and 
// the employeeQs() function is called.
function init() {
    return inquirer.prompt(managerQuestions)
        .then((response) => {
            if (response.addMore == 'No') {
                generateStaff.saveEmployee(response)
                writeToFile('./dist/index.html' ,generatePage.buildPage(generateStaff.employeeArr))
            }
            else if (response.addMore == 'Yes') {
                generateStaff.saveEmployee(response)
                employeeQs()
            }
        })
        .catch((err) => console.log(err))
}



init()