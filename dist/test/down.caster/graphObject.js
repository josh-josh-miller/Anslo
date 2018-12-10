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
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("object");
    expect(typeof downer.graph.contents).toBe("object");
    expect(typeof downer.graph.contents.something).toBe("object");
    expect(typeof downer.graph.contents.something.contents).toBe("object");
    expect(downer.graph.contents.other.contents).toBe(undefined);
}
exports.graphObject = graphObject;
