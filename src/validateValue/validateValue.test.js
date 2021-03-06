const validateValue = require('./validateValue');

test('Validation', () => {
    expect(validateValue(50)).toBe(true);
})
describe('validateValue', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('Less than correct value', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('More than correct value', () => {
        expect(validateValue(101)).toBe(false);
    })
    test('Lower border value', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('Upper border value', () => {
        expect(validateValue(100)).toBe(true);
    })
})