const expect = require("chai").expect;
const substitution = require("../src/substitution.js");


describe('substitution', () => {
    it("should return false if alphabet isn't exactly 26 characters long", () => {
        let actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    })
    it('should return false if the substitute alphabet is missing', () => {
        const expected = false;
        const actual = substitution('message', encode = true)
        expect(actual).to.equal(expected);
    })
    it("should encode a message by using the given substitution alphabet", () => {
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        const expected = "ykrrpik";
        expect(actual).to.equal(expected);
    })
    it('should return false if there any duplicate charachters in the given alphabet', () => {
        const expected = false;
        const actual = substitution('message', "ppmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    })
    it('should preserve spaces', () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");

    })
    it("should decode the message properly", () => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        let expected = "thinkful";
        expect(actual).to.equal(expected);
    })
})