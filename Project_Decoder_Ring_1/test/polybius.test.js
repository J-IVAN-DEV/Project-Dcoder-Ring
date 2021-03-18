const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius()", () => {
    it('should encode a message by translating each letter to number pairs', () => {
        const expected = "4432423352125413"
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    })
    it('should ignore capital letters', () => {
        const expected = '3251131343 2543241341';
        const actual = polybius("Hello world");
        expect(actual).to.eql(expected);
    })
    it("should translate the letters i and j to 42 when encoding", () => {
        const expected = '424223';
        const actual = polybius("Jim");
        expect(actual).to.equal(expected);
    })
    it('should maintain spaces in the letters', () => {
        const expected = '3251131343 2543241341';
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    })
    it("should when decoding translate the number 42 back to i/j", () => {
        let expected = "(i/j)";
        let actual = polybius("42", false);
        expect(actual).to.equal(expected);

        expect(actual).to.equal(expected);
    });

});