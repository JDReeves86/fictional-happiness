const Engineer = require('../utils/Engineer')

const obj = new Engineer('test', 123, 'test@test.com', 'test@github');

describe('Engineer', () => {
    describe('Engineer', () => {
        it("should return an object containing 'name', 'id', & 'email' properties when called with the 'new' keyword.", () => {
    

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('github' in obj).toEqual(true);
        });
    });
    describe('getName', () => {
        it("should return a value that is equal to the Engineers 'name' property", () => {


            expect(obj.getName()).toEqual('test')
        });
    });
    describe('getId', () => {
        it("should return a value that is equal to the engineers 'id' property", () => {


            expect(obj.getId()).toEqual(123)
        });
    });
    describe('getEmail', () => {
        it("should return a value that is equal to the engineers 'email' property", () => {


            expect(obj.getEmail()).toEqual('test@test.com')
        });
    });
    describe('getGithub', () => {
        it("should return a value that is equal to the engineers 'github' property", () => {
            

            expect(obj.getGithub()).toEqual('test@github')
        });
    });
    describe('getRole', () => {
        it("should return a value that is equal 'Engineer'", () => {


            expect(obj.getRole()).toEqual('Engineer')
        });
    });
})