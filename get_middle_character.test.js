const getMiddle = require('./get_middle_character');

test('check that it returns middle character', () => {
	expect(getMiddle("test")).toBe("es");
	expect(getMiddle("testing")).toBe("t");
	expect(getMiddle("middle")).toBe("dd");
	expect(getMiddle("bot")).toBe("o");
	expect(getMiddle("A")).toBe("A");
});