"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonFail_1 = require("./jsonFail");
var schemaFail_1 = require("./schemaFail");
var graphTypeFail_1 = require("./graphTypeFail");
var failUngraphArray_1 = require("./failUngraphArray");
var failUngraphDate_1 = require("./failUngraphDate");
var multipleDateSinglePointer_1 = require("./multipleDateSinglePointer");
var failUngraphObject_1 = require("./failUngraphObject");
var contextInstancePointer_1 = require("./contextInstancePointer");
var failUngraphPrimitive_1 = require("./failUngraphPrimitive");
var testObjectCreateInstance_1 = require("./testObjectCreateInstance");
function upcasterTesting() {
    test("It should fail with the when not presented with a valid json string", jsonFail_1.jsonFail);
    test("It should fail when give a json object that does not match schema", schemaFail_1.schemaFail);
    test("It should fail when graph.type is not a string", graphTypeFail_1.graphTypeFail);
    test("It should fail in ungraphing an array", failUngraphArray_1.failUngraphArray);
    test("It should fail in ungraphing a date", failUngraphDate_1.failUngraphDate);
    test("It should fail in ungraphing an object", failUngraphObject_1.failUngraphObject);
    test("It should be able to recognize context instance pointer", contextInstancePointer_1.contextInstancePointer);
    test("It should be able to handle the date pointer construction in upgraphing date", multipleDateSinglePointer_1.multipleDateSinglePointer);
    test("It should fail in ungraphing a primitive", failUngraphPrimitive_1.failUngraphPrimitive);
    test("it should be able to create instance with constructor properties", testObjectCreateInstance_1.testObjectCreateInstance);
}
exports.upcasterTesting = upcasterTesting;
