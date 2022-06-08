const mapArrToString = require('./mapArrToString');


describe('mapArrToString', () => {
    test('Correct value', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('Mishmash value', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 'asfasf'])).toEqual(['1', '2', '3']);
    })
    test('Empty array', () => {
        expect(mapArrToString([])).toEqual([]);
    })
    test('negative', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
    })

})