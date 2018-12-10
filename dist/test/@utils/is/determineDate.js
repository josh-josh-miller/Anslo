"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function determineDate() {
    expect(is_1.default.date(new Date)).toBe(true);
    expect(is_1.default.date(null)).toBe(false);
}
exports.determineDate = determineDate;
