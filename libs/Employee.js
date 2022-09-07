class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return this.name
    };
    getId() {
        return `Employee ID: ${this.id}`
    };
    getEmail() {
        return `mailto:${this.email}`
    };
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;