"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("../../../src/utils/cryptobox");
var testing_1 = require("./testing");
function decryptSomething() {
    var string = cryptobox_1.Cryptobox.encrypt("something", testing_1.key);
    var something = cryptobox_1.Cryptobox.decrypt(string, testing_1.key);
    expect(something).toBe("something");
}
exports.decryptSomething = decryptSomething;
