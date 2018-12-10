"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var down_caster_1 = require("../../src/down.caster");
function createGraph() {
    var downer = new down_caster_1.DownCaster("name", {}, {
        name: "name"
    });
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("object");
    expect(typeof downer.graph.c.name).toBe("object");
    expect(downer.graph.c.name.r).toBe(1);
    expect(downer.graph.c.name.t).toBe("string");
}
exports.createGraph = createGraph;
