"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = require("../../src");
var model_1 = require("../model");
function createInstance() {
    var anslo = new Anslo();
    var core = new Anslo({ User: model_1.default.User }, "core");
    var sub = new Anslo({}, "sub-main");
    expect(anslo).toBeInstanceOf(Anslo);
    expect(core).toBeInstanceOf(Anslo);
    expect(sub).toBeInstanceOf(Anslo);
    expect(typeof anslo["models"]).toBe("object");
    expect(typeof anslo["namespace"]).toBe("string");
    expect(function () { new Anslo(null); }).toThrow();
}
exports.createInstance = createInstance;
