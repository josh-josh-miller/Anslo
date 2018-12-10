"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var down_caster_1 = require("../../src/down.caster");
function graphPrimitives() {
    // { references: 0,
    //     type: 'object',
    //     contents:
    //      { word: { references: 1, type: 'string' },
    //        word2: { references: 1, type: 'string' } } }
    var data = {
        word: "word",
        word2: "word"
    };
    var downer = new down_caster_1.DownCaster("name", {}, data);
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("object");
    expect(typeof downer.graph.c).toBe("object");
    expect(downer.graph.c.word.r).toBe(1);
    expect(downer.graph.c.word2.r).toBe(1);
    expect(downer.graph.c.word.t).toBe("string");
    expect(downer.graph.c.word2.t).toBe("string");
}
exports.graphPrimitives = graphPrimitives;
