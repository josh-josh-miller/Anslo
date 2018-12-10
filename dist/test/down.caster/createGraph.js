"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var down_caster_1 = require("../../src/down.caster");
function createGraph() {
    var downer = new down_caster_1.DownCaster("name", {}, {
        name: "name"
    });
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("object");
    expect(typeof downer.graph.contents.name).toBe("object");
    expect(downer.graph.contents.name.references).toBe(1);
    expect(downer.graph.contents.name.type).toBe("string");
}
exports.createGraph = createGraph;
