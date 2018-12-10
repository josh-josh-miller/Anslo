"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var down_caster_1 = require("../../src/down.caster");
function graphArray() {
    // { references: 0,
    //     type: 'array',
    //     contents:
    //      { '0': { references: 1, type: 'array', contents: [Object] },
    //        '1': { references: 1, type: 'array' } } }
    var list = [1, 2, 3];
    var downer = new down_caster_1.DownCaster("name", {}, [list, list]);
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("array");
    expect(typeof downer.graph.c).toBe("object");
    expect(downer.graph.c[0].r).toBe(1);
    expect(downer.graph.c[0].t).toBe("array");
    expect(typeof downer.graph.c[0]).toBe("object");
    expect(downer.graph.c[1].c).toBe(undefined);
}
exports.graphArray = graphArray;
