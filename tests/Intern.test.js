const Intern = require('../libs/Intern.js')

const obj = new Intern('Intern', 'test', 123, 'test@test.com', 'Test University');

describe('Intern', () => {
    describe('Intern', () => {
        it("should return an object containing 'name', 'id', & 'email' properties when called with the 'new' keyword.", () => {
    

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('school' in obj).toEqual(true);
        });
    });
    describe('getName', () => {
        it("should return a value that is equal to the Interns 'name' property", () => {


            expect(obj.getName()).toEqual('test')
        });
    });
    describe('getId', () => {
        it("should return a value that is equal to the Interns 'id' property", () => {


            expect(obj.getId()).toEqual('Employee ID: 123')
        });
    });
    describe('getEmail', () => {
        it("should return a value that is equal to the Interns 'email' property", () => {


            expect(obj.getEmail()).toEqual('mailto:test@test.com')
        });
    });
    describe('getSchool', () => {
        it("should return a value that is equal to the Interns 'school' property", () => {
            

            expect(obj.getSchool()).toEqual('Enrolled at Test University')
        });
    });
    describe('getRole', () => {
        it("should return a value that is equal 'Intern'", () => {


            expect(obj.getRole()).toEqual('Intern')
        });
    });
})