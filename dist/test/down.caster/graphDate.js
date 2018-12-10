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
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("object");
    expect(downer.graph.contents.now.references).toBe(1);
    expect(downer.graph.contents.nower.references).toBe(1);
    expect(downer.graph.contents.now.type).toBe("date");
    expect(downer.graph.contents.nower.type).toBe("date");
    expect(downer.graph.contents.now.value).toBeInstanceOf(Date);
}
exports.graphDate = graphDate;
