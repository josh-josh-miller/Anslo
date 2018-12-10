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
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("object");
    expect(typeof downer.graph.contents).toBe("object");
    expect(typeof downer.graph.contents.something).toBe("object");
    expect(typeof downer.graph.contents.something.contents).toBe("object");
    expect(downer.graph.contents.other.contents).toBe(undefined);
}
