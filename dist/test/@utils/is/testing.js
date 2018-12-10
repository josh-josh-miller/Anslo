"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var determineObject_1 = require("./determineObject");
var determineDate_1 = require("./determineDate");
var determineModelCollection_1 = require("./determineModelCollection");
var determineBuiltFromModel_1 = require("./determineBuiltFromModel");
function isTesting() {
    test("it should be able to determine an object", determineObject_1.determineObject);
    test("it should be able to determine a date", determineDate_1.determineDate);
    test("it should be able to determine a model collection", determineModelCollection_1.determineModelCollection);
    test("it should be able to determine if built from model", determineBuiltFromModel_1.determineBuiltFromModel);
}
exports.isTesting = isTesting;
