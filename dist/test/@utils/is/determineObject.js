"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function determineObject() {
    expect(is_1.default.obj({})).toBe(true);
    expect(is_1.default.obj(undefined)).toBe(false);
    expect(is_1.default.obj(null)).toBe(false);
}
exports.determineObject = determineObject;
