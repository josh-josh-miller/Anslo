import { DownCaster } from "../../src/down.caster";
export function graphObject() {
    //  { references: 0,
    //     type: 'object',
    //     contents:
    //      { something: { references: 1, type: 'object', contents: [Object] },
    //        other: { references: 1, type: 'object' } } }
    let list = [1, 2, 3];
    let obj = {
        list,
        lister: list
    };
    let downer = new DownCaster("name", {}, { something: obj, other: obj });
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("object");
    expect(typeof downer.graph.c).toBe("object");
    expect(typeof downer.graph.c.something).toBe("object");
    expect(typeof downer.graph.c.something.c).toBe("object");
    expect(downer.graph.c.other.c).toBe(undefined);
}
