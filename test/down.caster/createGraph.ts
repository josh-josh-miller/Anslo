import { DownCaster } from "../../src/down.caster";
export function createGraph() {
    let downer = new DownCaster("name", {}, {
        name: "name"
    });
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("object");
    expect(typeof downer.graph.contents.name).toBe("object");
    expect(downer.graph.contents.name.references).toBe(1);
    expect(downer.graph.contents.name.type).toBe("string");
}
