const Employee= require('./Employee')

// Manager class
class Manager extends Employee {
    constructor(role, name, id, email, officeNumber) {
        super(role, name, id, email);
        this.officeNumber = officeNumber
    };
    getOfficeNumber() {
        return `Office number: ${this.officeNumber}`
    };
    getRole() {
        return 'Manager'
    };
};

module.exports = Manager;