const Manager = require('../utils/Manager')

describe('Manager', () => {
    describe('Manager', () => {
        it("should return an object containing 'name', 'id', & 'email' properties when called with the 'new' keyword.", () => {
            const obj = new Manager();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
    })
})