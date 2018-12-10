"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createGraph_1 = require("./createGraph");
var graphArray_1 = require("./graphArray");
var graphObject_1 = require("./graphObject");
var graphDate_1 = require("./graphDate");
var graphPrimitives_1 = require("./graphPrimitives");
var toString_1 = require("./toString");
function downcasterTesting() {
    test("it should be able to create graph", createGraph_1.createGraph);
    test("it should be able to graph an array", graphArray_1.graphArray);
    test("it should be able to graph a date", graphDate_1.graphDate);
    test("it should be able to graph obj", graphObject_1.graphObject);
    test("it should be able to graph primitives", graphPrimitives_1.graphPrimitives);
    test("it should be able to produce a string", toString_1.toString);
}
exports.downcasterTesting = downcasterTesting;
