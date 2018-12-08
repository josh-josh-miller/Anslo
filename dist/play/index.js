"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../src");
var model_1 = require("./model");
var main = new Anslo(Object.assign({ Date: Date }, model_1.default), "main");
var user = new model_1.default.User();
var string = main.stringify(user);
var instance = main.parse(string);
console.log(instance);
