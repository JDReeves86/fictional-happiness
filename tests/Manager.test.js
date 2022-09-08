const Manager = require('../libs/Manager.js')

const obj = new Manager('Manager', 'test', 123, 'test@test.com', 12);

// Manager unit tests
describe('Manager', () => {
    describe('Manager', () => {
        it("should return an object containing 'name', 'id', & 'email' properties when called with the 'new' keyword.", () => {
    

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('officeNumber' in obj).toEqual(true);
        });
    });
    describe('getName', () => {
        it("should return a value that is equal to the Managers 'name' property", () => {


            expect(obj.getName()).toEqual('test')
        });
    });
    describe('getId', () => {
        it("should return a value that is equal to the Managers 'id' property", () => {


            expect(obj.getId()).toEqual('Employee ID: 123')
        });
    });
    describe('getEmail', () => {
        it("should return a value that is equal to the Managers 'email' property", () => {


            expect(obj.getEmail()).toEqual('mailto:test@test.com')
        });
    });
    describe('getOfficeNumber', () => {
        it("should return a value that is equal to the Managers 'officeNumber' property", () => {
            

            expect(obj.getOfficeNumber()).toEqual('Office number: 12')
        });
    });
    describe('getRole', () => {
        it("should return a value that is equal 'Manager'", () => {


            expect(obj.getRole()).toEqual('Manager')
        });
    });
})