"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var up_caster_1 = require("../../src/up.caster");
var down_caster_1 = require("../../src/down.caster");
function multipleDateSinglePointer() {
    var now = new Date();
    var data = {
        now: now,
        nower: now
    };
    var down = new down_caster_1.DownCaster("name", {}, data).toString();
    var d = new up_caster_1.UpCaster("name", {}, down).toInstance();
    expect(d.now === d.nower).toBe(true);
}
exports.multipleDateSinglePointer = multipleDateSinglePointer;
