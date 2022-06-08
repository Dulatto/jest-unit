const mapArrToString = require('./mapArrToString');


describe('mapArrToString', () => {
    test('Correct value', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    })

})