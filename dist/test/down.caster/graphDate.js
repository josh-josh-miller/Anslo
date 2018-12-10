"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var down_caster_1 = require("../../src/down.caster");
function graphDate() {
    // { references: 0,
    //     type: 'object',
    //     contents:
    //      { now: { references: 1, type: 'date', value: 2018-12-09T19:27:50.756Z },
    //        nower: { references: 1, type: 'date', value: 2018-12-09T19:27:50.756Z } } }
    var now = new Date();
    var data = {
        now: now,
        nower: now
    };
    var downer = new down_caster_1.DownCaster("name", {}, data);
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("object");
    expect(downer.graph.c.now.r).toBe(1);
    expect(downer.graph.c.nower.r).toBe(1);
    expect(downer.graph.c.now.t).toBe("date");
    expect(downer.graph.c.nower.t).toBe("date");
    expect(downer.graph.c.now.v).toBeInstanceOf(Date);
}
exports.graphDate = graphDate;
