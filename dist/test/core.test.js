"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var testing_1 = require("./anslo/testing");
var testing_2 = require("./assign/testing");
var testing_3 = require("./down.caster/testing");
var testing_4 = require("./exceptions/testing");
var testing_5 = require("./up.caster/testing");
var testing_6 = require("./@utils/is/testing");
describe("Anslo", function () {
    describe("anslo", testing_1.ansloTesting);
    describe("assign", testing_2.assignTesting);
    describe("down.caster", testing_3.downcasterTesting);
    describe("exceptions", testing_4.exceptionsTesting);
    describe("up.caster", testing_5.upcasterTesting);
    describe("utils/is", testing_6.isTesting);
});
