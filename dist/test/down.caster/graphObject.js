"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var down_caster_1 = require("../../src/down.caster");
function graphObject() {
    //  { references: 0,
    //     type: 'object',
    //     contents:
    //      { something: { references: 1, type: 'object', contents: [Object] },
    //        other: { references: 1, type: 'object' } } }
    var list = [1, 2, 3];
    var obj = {
        list: list,
        lister: list
    };
    var downer = new down_caster_1.DownCaster("name", {}, { something: obj, other: obj });
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("object");
    expect(typeof downer.graph.c).toBe("object");
    expect(typeof downer.graph.c.something).toBe("object");
    expect(typeof downer.graph.c.something.c).toBe("object");
    expect(downer.graph.c.other.c).toBe(undefined);
}
exports.graphObject = graphObject;
