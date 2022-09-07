const Employee = require('../utils/Employee');
const Manager = require('../utils/Manager');
const Engineer = require('../utils/Engineer');
const Intern = require('../utils/Intern')



let employeeArr =[]

const saveEmployee = (response) => {
    employeeArr.push(response)
}

const parseEmployees = () => {
    const staff = employeeArr.map((element) => {
        console.log(element.role)
        if (element.role === 'Manager') new Manager(element.name, element.id, element.email, element.officeNumber)
        
        
        // switch (element.role) {
        //     case 'Manager':
        //         new Manager(element.name, element.id, element.email, element.officeNumber);
        //         break;
        //     case 'Engineer':
        //         new Engineer(element.name, element.id, element.email, element.github);
        //         break;
        //     case 'Intern':
        //         new Intern(element.name, element.id, element.email, element.school);
        //         break;
        //     default:
        //         return null
        // };
    });
    console.log(staff)
}

let generatePage = (response) => {
    console.log(employeeArr)
}


module.exports = {
    saveEmployee,
    parseEmployees,
    generatePage,
}