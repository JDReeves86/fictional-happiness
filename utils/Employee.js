class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return this.name
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return 'Employee'
    }
}

let jacob = new Employee('Jacob', 123, 'fake@aol.com')

console.log(jacob.getRole())

module.exports = Employee;