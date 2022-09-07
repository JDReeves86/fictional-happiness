const Employee = require('../libs/Employee')
const obj = new Employee('test', 123, 'test@test.com');


describe('Employee', () => {
    describe('Employee', () => {
        it("should return an object containing 'name', 'id', & 'email' properties when called with the 'new' keyword.", () => {

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
    });
    describe('getName', () => {
        it("should return a value that is equal to the employees 'name' property", () => {


            expect(obj.getName()).toEqual('test')
        });
    });
    describe('getId', () => {
        it("should return a value that is equal to the employees 'id' property", () => {


            expect(obj.getId()).toEqual(123)
        });
    });
    describe('getEmail', () => {
        it("should return a value that is equal to the employees 'id' property", () => {


            expect(obj.getEmail()).toEqual('test@test.com')
        });
    });
    describe('getRole', () => {
        it("should return a value that is equal 'Employee'", () => {


            expect(obj.getRole()).toEqual('Employee')
        });
    });
})