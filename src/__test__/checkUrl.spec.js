const input = require("../client/js/urlChecker");

describe('Test checkUrl functionality', () => {
    test('Testing the checkUrl() function', () => {
        expect(input.checkUrl("https://medium.com/")).toBe(true);
        expect(input.checkUrl("Hello World")).toBe(false);

    });
});
