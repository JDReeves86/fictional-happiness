const Employee = require('../utils/Employee');
const Manager = require('../utils/Manager');
const Engineer = require('../utils/Engineer');
const Intern = require('../utils/Intern');
const generatePage = require('./generatePage');



let employeeArr =[]

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

const getStaff = () => {
    return employeeArr
}


module.exports = {
    saveEmployee,
    getStaff,
}