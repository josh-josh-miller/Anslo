"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var down_caster_1 = require("../../src/down.caster");
function toString() {
    var data = {
        word: "word",
        word2: "word"
    };
    var downer = new down_caster_1.DownCaster("name", {}, data);
    var string = downer.toString();
    var stringWithSpaces = downer.toString(4);
    expect(typeof string).toBe("string");
    expect(string.length).toBe(116);
    expect(typeof stringWithSpaces).toBe("string");
    expect(stringWithSpaces.length).toBe(322);
}
exports.toString = toString;
