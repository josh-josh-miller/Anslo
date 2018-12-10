import { DownCaster } from "../../src/down.caster";
export function createGraph() {
    let downer = new DownCaster("name", {}, {
        name: "name"
    });
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("object");
    expect(typeof downer.graph.c.name).toBe("object");
    expect(downer.graph.c.name.r).toBe(1);
    expect(downer.graph.c.name.t).toBe("string");
}
