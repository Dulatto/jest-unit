const square = require('./square');


describe('square', () => {
    let mockValue;
    beforeEach(() => { //before each test
        mockValue = Math.random();
    })
    beforeAll(() => { //just once
        //add to db
    })
    test('Correct value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    })
    afterEach(() => { // delete from db
    })
    afterAll(() => { })

})