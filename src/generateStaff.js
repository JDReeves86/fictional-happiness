const Employee = require('../libs/Employee');
const Manager = require('../libs/Manager');
const Engineer = require('../libs/Engineer');
const Intern = require('../libs/Intern');
const generatePage = require('./generatePage');

// Array used to store response objects from the inquirer prompts.
let employeeArr =[]

// called at the end of the response cycle in inquirer. Uses a switch statement to peek into the object at the role key and depending on the values creates a new instance
// of each class and pushes those instances into employeeArr.
const saveEmployee = (response) => {
    switch (response.role) {
        case 'Manager':
            employeeArr.push(new Manager(response.role, response.name, response.id, response.email, response.officeNumber));
            break;
        case 'Engineer':
            employeeArr.push(new Engineer(response.role, response.name, response.id, response.email, response.github));
            break;
        case 'Intern':
            employeeArr.push(new Intern(response.role, response.name, response.id, response.email, response.school));
            break;
        default:
            return null
    }
}

module.exports = {
    saveEmployee,
    employeeArr,
}