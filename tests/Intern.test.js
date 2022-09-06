const Intern = require('../utils/Intern')

describe('Intern', () => {
    describe('Intern', () => {
        it("should return an object containing 'name', 'id', & 'email' properties when called with the 'new' keyword.", () => {
            const obj = new Intern();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
    })
})