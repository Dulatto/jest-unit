const validateValue = require('./validateValue');

test('Validation', () => {
    expect(validateValue(50)).toBe(true);
})