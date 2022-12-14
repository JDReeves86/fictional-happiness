const Employee= require('./Employee')

// Intern class
class Intern extends Employee {
    constructor(role, name, id, email, school) {
        super(role, name, id, email);
        this.school = school
    };
    getSchool() {
        return `Enrolled at ${this.school}`
    };
    getRole() {
        return 'Intern'
    };
};

module.exports = Intern;