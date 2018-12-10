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
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("object");
    expect(typeof downer.graph.contents).toBe("object");
    expect(downer.graph.contents.word.references).toBe(1);
    expect(downer.graph.contents.word2.references).toBe(1);
    expect(downer.graph.contents.word.type).toBe("string");
    expect(downer.graph.contents.word2.type).toBe("string");
}
exports.graphPrimitives = graphPrimitives;
